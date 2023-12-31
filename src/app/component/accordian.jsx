import React from 'react'


const Accordian = () => {
    return (
        <>

            <div class="accordion" id="accordionExample">

                <div class="accordion-item">
                    <h2 class="header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                            import React from "react";
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Restaurant are committed to honour any confirmed bookings we have generated.
                            For added peace of mind you should always reconfirm your booking using the the link included in your reminder email,
                            and it's also a good idea to take your confirmation email with you.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            How do I Make a regular Table Booking?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Restaurant are committed to honour any confirmed bookings we have generated.
                            For added peace of mind you should always reconfirm your booking using the the link included in your reminder email,
                            and it's also a good idea to take your confirmation email with you.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Why do you need my email address?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Restaurant are committed to honour any confirmed bookings we have generated.
                            For added peace of mind you should always reconfirm your booking using the the link included in your reminder email,
                            and it's also a good idea to take your confirmation email with you.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            What happens if I don't reconfirm my booking?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Restaurant are committed to honour any confirmed bookings we have generated.
                            For added peace of mind you should always reconfirm your booking using the the link included in your reminder email,
                            and it's also a good idea to take your confirmation email with you.
                        </div>
                    </div>
                </div>
            </div>
            <div className="faqimg position-relative">
                <img src="/assets/images/pngwing 2.png" width="300px" height="300px" alt="" />
            </div>
        </>
    )
}

export default Accordian