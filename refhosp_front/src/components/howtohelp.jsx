import React from 'react';
import donate from '../assets/img/donate.png'
import volunteer from '../assets/img/volunter.png'
import work from '../assets/img/work.png'
function HowToHelp()
{
    return (
        <>
            <section style={{ paddingTop: '60px', paddingBottom: "0px" }} className="help bg-light py-4">
                <div className="container-sm">
                    <div className="title text-center mb-4">
                        <h2 className="ls-2">HOW TO HELP US</h2>
                        <p>
                            Anyone can contribute to Sheik Hassen Yabare Comperhensive Specialized Hospital activities and help
                            us affirm
                            healthcare
                        </p>
                    </div>
                    <div className="row gap-5 text-center">
                        <div className="col-md">
                            <img src={donate} alt="" />
                            <h5 className="my-5">Support our activities</h5>
                            <a href="./donate.html" className="btn bg-body text-custom fw-bold d-block px-3 py-2 my-2">DONATE
                                NOW</a>
                        </div>
                        <div className="col-md">
                            <img src={volunteer} alt="" />
                            <h5 className="my-5">Keep in touch</h5>
                            <a href="./contact.html" className="btn bg-body text-custom fw-bold d-block px-3 py-2 my-2">Contact
                                Us</a>
                        </div>
                        <div className="col-md">
                            <img src={work} alt="" />
                            <h5 className="my-5">Work with us</h5>
                            <a href="./career.html" className="btn bg-body text-custom fw-bold d-block px-3 py-2 my-2">WHO WE
                                NEED</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HowToHelp;