import {loginFailure,loginSuccess,loginStart} from './userRedux'
import {publicRequest} from '../requestMethods'


export const login= async (dispatch,user)=>{
    dispatch(loginStart());
    try{ 
        const res=await publicRequest.post("/auth/login",user);
        //console.log("res",res.data)
        dispatch(loginSuccess(res.data));
    }
    catch(err){
     dispatch(loginFailure())
    }
}