import React from 'react'
import {Link} from 'react-router-dom'
import img1 from '../assets/chevrolet-n.png'
import img2 from '../assets/lada.png'
import img3 from '../assets/lambo.png'
import img4 from '../assets/ferrari.png'
import { useState } from 'react'

const Home = () => {
 const [link, navLink] = useState([
  {img:`${img1}`, text:'Chevrolet', to:'/chevrolet'},
  {img:`${img2}`, text:'Lada', to:'/'},
  {img:`${img3}`, text:'Lamborgini', to:'/'},
  {img:`${img4}`, text:'Ferrari', to:'/'}
 ])

  return (
    <div className='bg-[white]'>
      <div className='container mx-auto px-5'>
        <h2 className='text-5xl font-semibold mb-12'>Modellar</h2>
         <div className='w-full flex justify-between items-center flex-wrap'>
          {
            link.map((item) => {
              return(
                <Link to={item.to} key={item.text} className='text-center'>
                  <img src={item.img} alt={item.text}  className='w-[250px] mb-4'/>
                  <h2 className='text-[32px] font-medium'>{item.text}</h2>
                </Link>
              )
            })
          }
          
         </div>
      </div>
    </div>
  )
}

export default Home