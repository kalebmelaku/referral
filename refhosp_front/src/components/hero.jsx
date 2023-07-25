import React from 'react';
import bg from '../assets/img/bg.jpg';
function Hero()
{
    return (
        <>
            <main>
                <div className="bg">
                    <img src={bg} alt="" />
                </div>
                <div className="hero-text">

                    <h1>Largest Specialized Hospital and Medical School in Somali Regional State </h1>
                    <h5>
                        <span>Sheik Hassen Yabare Comperhensive Specialized Hospital </span>provides broad primary and secondary
                        care services to the
                        community
                    </h5>
                    <a href="./donate.html" className="btn bg-light text-custom mt-4">SUPPORT OUR WORK</a>
                </div>
            </main>
            <section style={{ paddingTop: '30px', paddingBottom: '30px' }} className="module text no-border base-theme"
                id="t-large-width">
                <div className="container-sm">
                    <h1 className="title text-custom text-center">
                        Largest specialized hospital at the heart of Jigjiga City.
                    </h1>

                    <div className="main-content-text py-4">
                        <p style={{ textAlign: 'center' }} className="py-4 text-cut mx-auto">
                            <strong>The hospital has designed to provide tertiary care services related on preventive,
                                diagnostic, curative, therapeutic, rehabilitative and support services for all patients on
                                referral
                                basis. Since the hospital is armed with modern medical equipment and skilled specialist
                                doctors</strong>
                        </p>
                        <p className="text-cut mx-auto center">
                            <span style={{ fontSize: '18px' }}>It also undertakes training, teaching and research activities for
                                Jigjiga
                                University, college of medicine and health science including internship training for students
                                from other health science colleges in the region</span>
                        </p>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;