import React from 'react'

const Footer = () => {
    return (
        <>
            <section className="ftr">
                <div className="ftrtop">
                    <img src="/assets/images/top1.png" width="100%" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6 pb-5 ps-0 pe-0">
                            <div className="d-flex">
                                <div className="col-6">
                                    <div className="ftimg pt-5">
                                        <img src="/assets/images/logo.png" alt="" />
                                    </div>
                                    <p className="text-light pt-4">
                                        Followers
                                    </p>
                                    <div className="fionc d-flex text-center m-auto">
                                        <div className="icon border rounded-circle border-light">
                                            <img src="/assets/images/face.png" alt="" />
                                        </div>
                                        <div className="icon border rounded-circle border-light">
                                            <img src="/assets/images/twitt.png" alt="" />
                                        </div>
                                        <div className="icon border rounded-circle border-light">
                                            <img src="/assets/images/link.png" alt="" />
                                        </div>
                                        <div className="icon border rounded-circle border-light">
                                            <img src="/assets/images/what.png" alt="" />
                                        </div>
                                    </div>

                                </div>
                                <div className="col-6">
                                    <h3 className="text-light pt-5 pb-3">
                                        About Restaurant
                                    </h3>
                                    <p className="ftrpar">
                                        Quickly supply alternative strategic theme areas vis-a-vis B2C mindshare.
                                        Objectively repurpose stand-alone synergy via user-centric architectures.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 ps-0 pe-0">
                            <div className="d-flex">
                                <div className="col-4 ms-5">
                                    <h3 className="text-light pt-5 ps-3 pb-3">
                                        link
                                    </h3>
                                    <ul className="ftrlist pb-4">
                                        <li>Home </li>
                                        <li>About Us</li>
                                        <li>Rooms</li>
                                        <li>Banquet</li>
                                        <li>Resturent</li>
                                        <li>Events</li>
                                        <li>FAQ's</li>
                                        <li>Contact Us</li>
                                    </ul>
                                </div>
                                <div className="col-4">
                                    <h3 className="text-light pt-5 pb-3">
                                        Address
                                    </h3>
                                    <p className="ftrpar">
                                        Gangani House, beside Aagam Emporio,Udhana – Magdalla Road,Vesu, Surat
                                    </p>
                                </div>
                                <div className="col-4 ps-4">
                                    <h3 className="text-light pt-5 pb-3">
                                        Phone
                                    </h3>
                                    <p className="ftrpar">
                                        +91 96247 37644
                                    </p>
                                    <p className="ftrpar">
                                        +91 96247 37644
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer