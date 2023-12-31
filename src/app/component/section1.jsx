import React from 'react'
import Accordian from './accordian'

const Section1 = () => {
  return (
    <>
      <div className="mainfaq">
        <div className="sectop">
          <img src="/assets/images/top1.png" width="100%" alt="" />
        </div>
        <div className="container">
          <div className="row justify-content-center text-center pt-2 align-iten center pt-5">
            <div className="faq pt-5">
              <img src="/assets/images/faq2.png" alt="" />
            </div>
            <h2 className="tth pt-3">Frequently Asked And</h2>
            <h2 className="tth pb-3">Questions</h2>
          </div>
          <div className="faqsec">
            <Accordian />
          </div>
        </div>
      </div>
    </>
  )
}

export default Section1