import React from 'react'
import About from '../Components/About'
import Header from '../Components/Header'
import Navber from '../Components/Navber'
import TreeImg from '../Components/TreeImg'
import WorkExperience from '../Components/WorkExperience'
const Home = () => {
  return (
    <div>
        <Header/>
        <Navber/>
        <TreeImg/>
        <About/>
        <WorkExperience/>
    </div>
  )
}

export default Home