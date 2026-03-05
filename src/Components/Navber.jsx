import React from 'react'
import Container from './Container'
import girl from "../assets/Girl1.png"
const Navber = () => {
  return (
    <section>
        <Container>
            <div className="">
                <img src={girl} alt="" />
                <div className="">
                    <h1 className='text-[40px] font-DM'>Hey, I’m <span className='font-bold italic'>Aria Grande.</span> <br /> Dreamer & 🎨 Designer</h1>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Navber