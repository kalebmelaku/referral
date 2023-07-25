import React, { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import ServiceBox from '../components/serviceBox';
import ambulance from '../assets/img/ambulance.jpeg'
import bloodbank from '../assets/img/surgery.jpg'
import kidney from '../assets/img/kidney.jpg'

function Services()
{
    useEffect(() =>
    {
        document.title = 'SERVICES';
    });
    return (
        <>
            <Header />
            <div className="container my-5 services">
                <div className="row justify-content-center gap-4 align-items-stretch">
                    <ServiceBox
                        title='Blood Bank'
                        desc='Our hospital has a well-equipped blood bank with all blood types readily available. We maintain the highest standards of safety and cleanliness in our blood bank.'
                        link='bloodbank'
                        img = {bloodbank}
                    />
                    <ServiceBox
                        title='Ambulance'
                        desc='Our ambulance service is available 24/7 to transport patients to and from our hospital. Our ambulances are equipped with all necessary medical equipment and staffed by trained professionals.'
                        link='ambulance'
                        img = {ambulance}
                    />
                    <ServiceBox
                        title='Kidney Dialysis'
                        desc='Kidney dialysis is a service offered by hospitals to patients suffering from kidney failure. It involves the use of a machine to filter the patient blood removing waste products and excess fluids that would normally be eliminated by the kidneys'
                        link='kidney'
                        img = {kidney}
                    />
                    <ServiceBox
                        title='Cancer Treatment'
                        desc='Cancer treatment is a vital service provided by hospitals to patients diagnosed with cancer. The service includes a wide range of medical interventions, such as chemotherapy, radiation therapy, surgery, and immunotherapy.'
                        link='cancer'
                        img = {bloodbank}
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Services;