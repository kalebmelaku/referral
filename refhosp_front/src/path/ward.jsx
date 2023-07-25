import React, { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function Ward()
{
    useEffect(() =>
    {
        document.title = 'WARD';
    });
    return (
        <>
            <Header />
            <section className="dept py-3">
                <div className="container-sm ">
                    <h3 className="text-center">CLINICAL DEPARTMENTS AND CLINICS</h3>
                    <div className="row py-5 align-items-start justify-content-center mx-auto gap-4 text-center">
                        <div className="col-md-3 py-2 bg-light">
                            <h5>Surgical Department</h5>
                            <div className="desc_dept hide">
                                <p>Description About Surgical Department</p>
                            </div>
                        </div>
                        <div className="col-md-3 py-2 bg-light">
                            <h5>Internal Medicine Department</h5>
                            <div className="desc_dept hide">
                                <p>Description About Internal Medicine Department</p>
                            </div>
                        </div>
                        <div className="col-md-3 py-2 bg-light">
                            <h5>Pediatrics Department</h5>
                            <div className="desc_dept hide">
                                <p>Description About The Department</p>
                            </div>
                        </div>
                        <div className="col-md-3 py-2 bg-light">
                            <h5>Gynecology & Obstetrics Department</h5>
                            <div className="desc_dept hide">
                                <p>Description About The Department</p>
                            </div>
                        </div>

                        <div className="col-md-3 py-2 bg-light">
                            <h5>Radiology Department</h5>
                            <div className="desc_dept hide">
                                <p>Description About The Department</p>
                            </div>
                        </div>
                        <div className="col-md-3 py-2 bg-light">
                            <h5>Ophthalmology Department</h5>
                            <div className="desc_dept hide">
                                <p>Description About The Department</p>
                            </div>
                        </div>
                        <div className="col-md-3 py-2 bg-light">
                            <h5>Dental Clinic</h5>
                            <div className="desc_dept hide">
                                <p>Description About The Department</p>
                            </div>
                        </div>
                        <div className="col-md-3 py-2 bg-light">
                            <h5>Hepatic Clinic</h5>
                            <div className="desc_dept hide">
                                <p>Description About The Department</p>
                            </div>
                        </div>

                        <div className="col-md-3 py-2 bg-light">
                            <h5>Nephrology Unit</h5>
                            <div className="desc_dept hide">
                                <p>Description About The Department</p>
                            </div>
                        </div>
                        <div className="col-md-3 py-2 bg-light">
                            <h5>Psychiatric Department</h5>
                            <div className="desc_dept hide">
                                <p>Description About The Department</p>
                            </div>
                        </div>
                        <div className="col-md-3 py-2 bg-light">
                            <h5>Physio-therapy and Rehabilitation Unit</h5>
                            <div className="desc_dept hide">
                                <p>Description About The Department</p>
                            </div>
                        </div>
                        <div className="col-md-3 py-2 bg-light">
                            <h5>Oncology Center</h5>
                            <div className="desc_dept hide">
                                <p>Description About The Department</p>
                            </div>
                        </div>

                        <div className="col-md-3 py-2 bg-light">
                            <h5>GI Center</h5>
                            <div className="desc_dept hide">
                                <p>Description About The Department</p>
                            </div>
                        </div>
                        <div className="col-md-3 py-2 bg-light">
                            <h5>Gastro Entrology Unit</h5>
                            <div className="desc_dept hide">
                                <p>Description About The Department</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="dept py-3">
                <div className="container-sm ">
                    <h3 className="text-center">SUPPORT DEPARTMENT</h3>
                    <div className="row py-5 align-items-start justify-content-center mx-auto gap-4 text-center">
                        <div className="col-md-3 py-2 bg-light">
                            <h5>Quality Assurance</h5>
                            <div className="desc_dept hide">
                                <p>Description About Quality Assurance</p>
                            </div>
                        </div>
                        <div className="col-md-3 py-2 bg-light">
                            <h5>Public Relation</h5>
                            <div className="desc_dept hide">
                                <p>Description About Public Relation</p>
                            </div>
                        </div>
                        <div className="col-md-3 py-2 bg-light">
                            <h5>Women and Youth Affair</h5>
                            <div className="desc_dept hide">
                                <p>Description About The Department</p>
                            </div>
                        </div>
                        <div className="col-md-3 py-2 bg-light">
                            <h5>ICT Department</h5>
                            <div className="desc_dept hide">
                                <p>Description About The Department</p>
                            </div>
                        </div>

                        <div className="col-md-3 py-2 bg-light">
                            <h5>Budget and Planning</h5>
                            <div className="desc_dept hide">
                                <p>Description About The Department</p>
                            </div>
                        </div>
                        <div className="col-md-3 py-2 bg-light">
                            <h5>Internal Audit</h5>
                            <div className="desc_dept hide">
                                <p>Description About The Department</p>
                            </div>
                        </div>
                        <div className="col-md-3 py-2 bg-light">
                            <h5>Finance and Budget</h5>
                            <div className="desc_dept hide">
                                <p>Description About The Department</p>
                            </div>
                        </div>
                        <div className="col-md-3 py-2 bg-light">
                            <h5>HRM Director</h5>
                            <div className="desc_dept hide">
                                <p>Description About The Department</p>
                            </div>
                        </div>

                        <div className="col-md-3 py-2 bg-light">
                            <h5>Finance and Procurement</h5>
                            <div className="desc_dept hide">
                                <p>Description About The Department</p>
                            </div>
                        </div>
                        <div className="col-md-3 py-2 bg-light">
                            <h5>Property Admin</h5>
                            <div className="desc_dept hide">
                                <p>Description About The Department</p>
                            </div>
                        </div>
                        <div className="col-md-3 py-2 bg-light">
                            <h5>General Service</h5>
                            <div className="desc_dept hide">
                                <p>Description About The Department</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Ward;