import React from 'react'
import Container from './Container'
import girl from "../assets/Girl1.png"
import { GoDotFill } from 'react-icons/go'
const Navber = () => {
  return (
    <section>
        <Container>
            <div className="w-6/12">
                <img className=' shadow-xl/30 rounded-full' src={girl} alt="" />
                <div className="">
                    <h1 className='text-[40px] font-DM'>Hey, I’m <span className='font-bold italic'>Aria Grande.</span> <br /> Dreamer & 🎨 Designer</h1>
                    <p className='font-DM text-[14px]'>I design with passion, dream with ambition, and bring ideas to life. With a knack for creativity and an eye for detail, I specialize in crafting user-centered designs that inspire and engage.</p>
                </div>
                <div className="flex gap-4 pt-4">
                    <button className='px-3 py-2 border rounded-2xl font-DM  bg-[#333333] text-[#FFFFFF]  cursor-pointer hover:shadow-2xl duration-300 ease-in-out hover:scale-105'>Book a Call</button>
                    <button className='px-3 py-2 border border-[#30ca69] rounded-2xl  font-DM bg-[#86EFAC] text-[#16A34A] flex items-center gap-2 cursor-pointer hover:shadow-2xl duration-300 ease-in-out hover:scale-105'>< GoDotFill /> Available for work</button>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Navber