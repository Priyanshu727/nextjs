import React from 'react'

const Section2 = () => {
  return (
    <>
      <section>
        <div className="ftop poistion-relative">
          <img src="/assets/images/dimg.png" width="100%" alt="" />
        </div>
        <div className="container">
          <div className="row justify-content-center text-center pt-2 align-iten center pt-5">
            <div className="frm ">
              <div className="frmtit pt-5">
                <img src="/assets/images/frmt.png" alt="" />
              </div>
              <div className="frmdev d-flex pb-5 ">
                <div className="col-6 pt-4">
                  <div className="frmimg">
                    <img src="/assets/images/bag.png" width="400px" height="450px" alt="" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="frmtext">
                    <form className="m-auto pt-5 mt-5 frmt">
                      <div className="form-group w-75 mb-2">
                        <input type="text" className="form-control" id="firstName" placeholder=" Your Name" />
                      </div>

                      <div className="form-group w-75 mb-2">
                        <input type="text" className="form-control" id="street" placeholder="Phone Number" />
                      </div>

                      <div className="form-group mb-2 w-75">
                        <input type="text" className="form-control" id="city" placeholder=" Your Email" />
                      </div>

                      <div className="form-group w-75 mb-2">
                        <input type="email" className="form-control" id="email" placeholder="Inquery For" />
                      </div>

                      <div className="form-group w-75 mb-2">
                        <textarea className="form-control" id="message" rows="4" cols="6" placeholder=" Your message (optionla)"></textarea>
                      </div>
                      <button type="button" class="btn btn-outline-warning">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Section2