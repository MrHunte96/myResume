import React from "react";
import { MdOutlineEmail } from "react-icons/md"

import './contact.css'

const Contact = () => {
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className="contact__title">
                    <MdOutlineEmail className="contact__title-icon" />
                    <h4>Email</h4>
                </div>
                <a href="mailto:chuahongwei2013@yahoo.com.sg">chuahongwei2013@yahoo.com.sg</a>
            </div>
        </section>
    )
}

export default Contact;