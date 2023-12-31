import React from 'react'
import Btn from '../component/Button'


const Gnine = () => {
  return (
    <>
      <div className="subban pb-5">
        <div className="subtt position-relative">
          <img src="/assets/images/dimg.png" width="100%" alt="" />
        </div>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-6">
              <div className="subimg">
                <img src="/assets/images/subimg.png" width="600px" height="300px" alt="" />
              </div>
            </div>
            <div className="col-6">
              <div className="subcont position-relative">
                <div className="submin pb-3">
                  <img src="/assets/images/subimg2.png" alt="" />
                </div>
                <h2 className="ps-3 evth">G Nine</h2>
                <p className="ps-3 evtp">
                  When Surat city, the Textile & diamond of hub of India, calls you; you have to stay at
                  a place that is in the heart of the city
                </p>
                <p className="ps-3 evtp">
                  Hotel G Nine keeps you within reach, be it conferences, meetings, workshops, corporate events,
                  entertaining delegates or even your destination functions, celebrations or any other social gathering at your end.
                </p>
                <div className="ps-3">
                  <Btn />
                </div>
                <div className="subtop position-absolute">
                  <img src="/assets/images/subtop.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Gnine