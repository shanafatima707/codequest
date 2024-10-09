import React from 'react'
import Leftsidebar from '../../Component/Leftsidebar/Leftsidebar'
import Rightsidebar from '../../Component/Rightsidebar/Rightsidebar'
import Homemainbar from '../../Component/Homemainbar/homemainbar'
import '../../App.css'

const Home = ({slidein}) => {
  return (
    <div className="home-container-1">
      <Leftsidebar slidein={slidein}/>
      <div className="home-container-2">
        <Homemainbar/>
        <Rightsidebar/>
      </div>
    </div>
  )
}

export default Home