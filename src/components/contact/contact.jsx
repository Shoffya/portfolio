import './contact.css'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'

function Contact() {
    return (
        <div id='contact' className="container contact-container">
            <h2 className='titleContact'>Contact me</h2>
            <div className="contact-links">
                <a href="" className="contact whatsapp">
                    <AiOutlineWhatsApp className='icon' />
                    <h2>Whatsapp <span>Get in touch</span></h2>
                </a>
                <a href="" className="contact linkedin">
                    <BsLinkedin className='icon' />
                    <h2>LinkedIn <span>My LinkedIn</span></h2>
                </a>
                <a href="" className="contact email">
                    <GrMail className='icon' />
                    <h2>Email <span>My Email</span></h2>
                </a>
            </div>
        </div>
    )
}

export default Contact;