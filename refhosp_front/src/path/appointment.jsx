import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import emailjs from '@emailjs/browser';

function Appointment()
{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [phone, setPhone] = useState('');
    const [dept, setDept] = useState('');
    function sendAppointment(e)
    {
        e.preventDefault();

        emailjs
            .send("service_k5bbnzt", "template_dtgye21", {
                to_name: name,
                date: date,
                from_name: "Referral Hospital",
                email: email,
                time: time,
                dept: dept,
            }, "VC8Ty8_l7UQOpJhQk")
            .then((res) =>
            {
                alert("Your Appointment Is Reserved");
                // window.location.reload();
                // appointment.classList.remove("show");
                // document.body.classList.remove("modal-open");
            })
            .then((err) => console.log(err));
    }
    return (
        <>
            <Header />
            <div className="container-sm">
                <div className="col-sm-6 my-4 mx-auto">
                    <div
                        className=""
                        id="appointment"
                    >
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Book Appointment</h5>

                                </div>
                                <div className="modal-body">
                                    <div className="container-sm">
                                        <div className="row justify-content-center">
                                            <div className="col-sm">

                                                <form className="appointment" id="myForm">
                                                    <div className="d-flex align-items-center">
                                                        <div className="form-group mb-3">
                                                            <label htmlFor="name">Name:</label>
                                                            <input
                                                                type="text"
                                                                className="form-control appointment-form"
                                                                id="name"
                                                                required
                                                                placeholder="Enter your name"
                                                                onChange={(e) => setName(e.target.value)}
                                                            />
                                                        </div>
                                                        <div className="form-group mb-3">
                                                            <label htmlFor="email">Email:</label>
                                                            <input
                                                                type="email"
                                                                className="form-control appointment-form"
                                                                id="email"
                                                                required
                                                                placeholder="Enter your email"
                                                                onChange={(e) => setEmail(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <div className="form-group mb-3">
                                                            <label htmlFor="phone">Phone:</label>
                                                            <input
                                                                type="tel"
                                                                className="form-control appointment-form"
                                                                id="phone"
                                                                required
                                                                placeholder="Enter your phone number"
                                                                onChange={(e) => setPhone(e.target.value)}
                                                            />
                                                        </div>
                                                        <div className="form-group mb-3">
                                                            <label htmlFor="date">Appointment Date:</label>
                                                            <input
                                                                type="date"
                                                                className="form-control appointment-form"
                                                                id="date"
                                                                min=""
                                                                required
                                                                placeholder="Enter your appointment date"
                                                                onChange={(e) => setDate(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <div className="form-group mb-3">
                                                            <label htmlFor="time">Appointment Time:</label>
                                                            <select name="" id="time" className="form-control appointment-form" required onChange={(e) => setTime(e.target.value)}>
                                                                <option value="Morning">Morning</option>
                                                                <option value="Afternoon">Afternoon</option>
                                                            </select>

                                                        </div>
                                                        <div className="form-group mb-3">
                                                            <label htmlFor="department">Department:</label>
                                                            <select className="form-control appointment-form" id="department" required onChange={(e) => setDept(e.target.value)}>
                                                                <option value="">Select Department</option>
                                                                <option value="Cardiology">Cardiology</option>
                                                                <option value="Orthopedics">Orthopedics</option>
                                                                <option value="Neurology">Neurology</option>
                                                                <option value="Oncology">Oncology</option>
                                                                <option value="Gynecology">Gynecology</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <input
                                                        id="appointment_btn"
                                                        type="submit"
                                                        className="btn btn-primary appointment_btn btn-block btn-login"
                                                        value="Submit"
                                                        onClick={sendAppointment}
                                                    />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Appointment;