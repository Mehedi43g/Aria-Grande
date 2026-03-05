import React from 'react'
import Container from './Container'

const About = () => {
  return (
    <section className='py10'>
        <Container>
            <div className="flex flex-col gap-3 mx-auto ">
               <h3 className='text-[40px] font-DM font-bold '>About</h3> 
               <p className=' text-[14px] text-[#737373] font-DM '>Hi there! I’m Mia Carter, a designer driven by curiosity and a passion for creativity. My journey began with a love
                 for art and technology, which naturally evolved into a career in design. Over the years, I’ve honed my skills in UX/UI design,
                 visual storytelling, and creating intuitive user experiences that resonate with people. I believe great design is not just
                 about aesthetics but also about solving problems and making life easier for users.</p>
                 <p className='pt-5 text-[14px] text-[#737373] font-DM '>When I’m not immersed in design projects, you’ll find me exploring new creative avenues, whether it’s 
                    sketching ideas, traveling for inspiration, or diving into the latest design trends. Collaboration excites me,
                     and I thrive in environments where ideas flow freely and innovation takes center stage. I’m always ready to take 
                     on new challenges that push the boundaries of creativity and functionality.</p>
            </div>
        </Container>
    </section>
  )
}

export default About