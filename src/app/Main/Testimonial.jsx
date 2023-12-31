import React from 'react'

const Testimonial = () => {
    return (
        <>
            <section>
                <div className="tttop position-relative">
                    <img src="/assets/images/dimg.png" width="100%" alt="" />
                </div>
                <div className="container pb-5">
                    <div className="col-12">
                        <div className="d-flex justify-content-center  align-items-center">
                            <div className="col-6">
                                <div className="testimg ps-3">
                                    <img src="/assets/images/testimg.png" alt="" />
                                </div>
                                <h2 className="ps-3 pt-3 tth">
                                    What customer saying
                                </h2>
                                <h2 className="ps-3 tth">
                                    About Services
                                </h2>
                                <div className="d-flex pt-3 ps-3">
                                    <div className="testreviw ">
                                        <div className="row p-5 ">
                                            <div className="tmrk">
                                                <img src="/assets/images/Symbol.png" alt="" />
                                            </div>
                                            <div className="testpera">
                                                <p className="p-4">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                </p>
                                            </div>
                                            <div className="teststar">
                                                <div className="d-flex">
                                                    <div className="star">
                                                        <img src="/assets/images/star.png" width=" 150px" alt="" />
                                                    </div>
                                                    <div className="starback m-auto ps-5">
                                                        <img src="/assets/images/starback.png" width="100px" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rating ps-5 pt-5">
                                        <img src="/assets/images/rating.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <img src="/assets/images/test22.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial