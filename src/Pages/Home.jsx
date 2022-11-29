import React from 'react'
import { Announcement } from '../Components/Announcement'
import Navbar from '../Components/Navbar'
import { Slider } from '../Components/Slider'
import { Category } from '../Components/Category'
import Products from '../Components/Products'
import { Newsletter } from '../Components/Newsletter'
import { Footer } from '../Components/Footer'
function Home() {
  return (
    <div>
     <Announcement/>
     <Navbar/>
     <Slider/>
     <Category />
     <Products/>
     <Newsletter />
     <Footer />
    </div> 
  )
}

export default Home