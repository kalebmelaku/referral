

function ContactForm() {
  return (
    <>
        <section className="contact py-4">
        <div className="container-sm">

            <div className="row">
                <div className="col-sm">
                    <form>
                        <div className="form-group mt-3">
                            <label htmlFor="exampleFormControlInput1">Full Name</label >
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="exampleFormControlInput1">Email address</label >
                            <input type="email" className="form-control" id="exampleFormControlInput1 "
                                placeholder="name@example.com" />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="exampleFormControlInput1">Phone Number</label >
                            <input type="number" min="0" className="form-control" id="exampleFormControlInput1"
                                placeholder="" />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="exampleFormControlTextarea1">Your Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <input type="submit" value="SEND" className="btn btn-blue mt-3" />
                    </form>
                </div>
                <div className="col-sm bg-light mx-auto">
                    <div className="">
                        <div className="title text-center">
                            <h3>Location <span><i className="fa-solid fa-location-dot"></i></span></h3>
                        </div>
                        <div className="mapouter">
                            <div className="gmap_canvas"><iframe width="100%" height="500" id="gmap_canvas"
                                    src="https://maps.google.com/maps?q=jijiga%20sheik%20hassen%20yabare%20&t=k&z=17&ie=UTF8&iwloc=&output=embed"
                                    frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                              
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

export default ContactForm