import React from 'react'
import Btn from '../component/Button'

const Event = () => {
    return (
        <>
            <div className="evt pt-3">
                <div className="evttop position-relative">
                    <img src="/assets/images/dimg.png" width="100%" alt="" />
                </div>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-6">
                            <div className="evtmain position-relative">
                                <div className="evttom position-absolute">
                                    <img src="/assets/images/evttomm.png" alt="" />
                                </div>
                                <div className="evtlog">
                                    <img src="/assets/images/evntig.png" alt="" />
                                </div>
                                <h2 className="evth">
                                    Gallery
                                </h2>
                                <p className="evtp">
                                    We have successfully organized 500+ events. Our expert staff has experience for organizing every type of event,
                                    from birthday parts to corporate events, from spiritual pooja to wedding and engagement functions.
                                </p>
                                <p className="evtp pb-2">
                                    Our spacious banquet’s capacity is for 200+ people to enjoy the function.Our staff will handle your entire event,
                                    all you have to make sure is that all your guests enjoy and make a memorable event.
                                </p>
                                <div className="evtb pb-5">
                                    <Btn />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className=" row align-items-center justify-content-center">
                                <div className="col-12">
                                    <div className="evtgal">
                                        <img src="/assets/images/evt4.png" width="650px" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Event