import React from 'react'
import img8 from "../assets/image8.png"
import img9 from "../assets/image9.png"
import img10 from "../assets/image10.png"

const TreeImg = () => {
  return (
   <section className='py-10'>
    <div className="flex justify-between">
        <div className="">
            <img src={img8} alt="" />
        </div>
         <div className="">
            <img src={img9} alt="" />
        </div>
         <div className="">
            <img src={img10} alt="" />
        </div>
    </div>
   </section>
  )
}

export default TreeImg