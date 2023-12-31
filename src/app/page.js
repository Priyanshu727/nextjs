import React from 'react'
import Mainbanner from './Main/mainbanner'
import Gnine from './Main/Gnine'
import Service from './Main/Service'
import Event from './Main/Event'
import Chooseus from './Main/Chooseus'
import Testimonial from './Main/Testimonial'
import Section1 from './component/section1'
import Section2 from './component/section2'

const page = () => {
  return (
    <>
      <Mainbanner />
      <Gnine />
      <Service />
      <Event />
      <Chooseus />
      <Testimonial />
      <Section1 />
      <Section2/>    
    </>
  )
}

export default page