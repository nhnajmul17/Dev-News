import React, { useRef } from 'react';
import './Contact.css';
import contactImage from '../../Images/contact_image.jpg';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import emailjs from 'emailjs-com';
import swal from 'sweetalert'; 

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('team_project2022', 'template_d6iq6r6', form.current, 'user_0Kc8zc4YB4JqkU2TwdasG')
            .then((result) => {
                console.log(result.text);
                if (result.text === "OK") {
                    swal({
                        title: "Good job!",
                        text: "email send successfully! We will contact you soon",
                        icon: "success",
                    });
                }
            }, (error) => {
                // console.log(error.text);
                swal({
                    title: "Als!!",
                    text: (error.message),
                    icon: "error",
                });
            });
        form.current.reset();
    }
    return (
        <div className='contact__page'>
            <Header/>
            <div className='contact__section'>
                <div className='contact__image'>
                    <img src={contactImage} alt="contact img" />
                </div>
                <div className='contact__form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" placeholder='your name' required name='client-name' /> <br />
                        <input type="email" placeholder='email' required name='email' /> <br />
                        <textarea name="message" id="" cols="37.8" rows="5" placeholder='message' required ></textarea> <br />
                        <button className='sent__email__button'>Send email</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Contact;