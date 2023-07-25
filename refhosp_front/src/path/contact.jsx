import { useEffect } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import ContactForm from "../components/contactForm"


function Contact() {
    useEffect(()=>{
        document.title = 'CONTACT US'
    })
  return (
   <>
    <Header/>
        <ContactForm/>
    <Footer/>
   </>
  )
}

export default Contact