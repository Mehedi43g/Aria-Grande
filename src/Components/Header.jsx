import React from 'react'
import Container from './Container'

import { IoHomeSharp } from 'react-icons/io5'
import { FaBasketball } from 'react-icons/fa6'
import { LuInstagram } from 'react-icons/lu'
import { MdOutlineWifiCalling3 } from 'react-icons/md'
const Header = () => {
  return (
    <Container>
        <div className="  py-5  ">
            <div className="flex  gap-8 justify-center  mx-auto items-center border-2 border-[#333333a2] rounded-2xl py-2 w-6/12">
            <div className="border-r pr-1">
            <IoHomeSharp className='hover:scale-125  duration-300 ease-in-out  text-2xl text-[#333333a2]'/>
            </div>
            <div className="">

            <FaBasketball className='hover:scale-125 duration-300 ease-in-out text-2xl text-[#333333a2]'/> 
            </div>
            <div className="">

            <LuInstagram className='hover:scale-125 duration-300 ease-in-out text-2xl text-[#333333a2]'/>
            </div>
            <div className="border-r pr-1">

            <MdOutlineWifiCalling3 className='hover:scale-125 duration-300 ease-in-out text-2xl text-[#333333a2]'/>
            </div>
            <div className="bg-[#333333a2] p-2 rounded-2xl hover:scale-125 duration-300 ease-in-out">
                <button className='text-[#FFFFFF] font-DM'>Book a call</button>
            </div>
            </div>
        </div>
    </Container>
  )
}

export default Header