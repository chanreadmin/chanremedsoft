import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import FooterSection from '../Home/FooterSection';
import './Quotation.css'
function Quotation() {

    const form = useRef();
    console.log(form.current);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_y6t6z3f', 'template_s93du8n', form.current, 'qk0wxlJwal9ag4sjS')
            .then((result) => {
                toast.success('Your query has been sent!!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                console.log(result.text);

            }, (error) => {
                toast.error('Try again after sometime!!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                console.log(error.text);
            });
    };

    return (
        <div className="container contact">
            <div className="row">
                
                <div className="col-md-12">
                <div className="headlines mt-1" data-aos="fade-right">
                    <h2>
                        Quotation <span className="text-primary">Form</span>
                    </h2>
                    <p>
                        Unleash the Digital Possibilities
                    </p>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Address</h5>
                            <p className="card-text">
                                No. 414/65, 20th Main,West of Chord road,1st Block, Rajajinagar, Bangalore-560010
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Contact</h5>
                            <p className="card-text">
                                Email: marketing@chanrejournals.com
                                Mobile: +91 80-42516636
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <form ref={form} onSubmit={sendEmail} className='contact contact-form mb-5'>
                                <label>Name</label>
                                <input className='form-control' type="text" name="user_name" />
                                <label>Email</label>
                                <input className='form-control' type="email" name="user_email" />
                                <label>Project</label>
                                <select name="project_name" id="project_name" className='form-control'>
                                    <option>Choose the application</option>
                                    <option value="HICMS">HICMS</option>
                                    <option value="Appointment System">Appointment System</option>
                                    <option value="AI Chatbot">AI Chatbot</option>
                                    <option value="Database Registry">Database Registry</option>
                                    <option value="Online Quiz">Online Quiz</option>
                                    <option value="Pharmacy Management">Pharmacy Management</option>
                                    <option value="Hospital Management">Hospital Management</option>
                                </select>
                                <label>Message</label>
                                <textarea className='form-control' name="message" />
                                <input type="submit" value="Send" className='btn btn-primary mt-2' />
                            </form>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <iframe title="iFrame " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.574131206376!2d77.54765887507692!3d12.999068187318798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dbc8be6ee1f%3A0x99d77f3579e9ed2e!2sChanRe%20Rheumatology%20And%20Immunology%20Center%20And%20Research!5e0!3m2!1sen!2sin!4v1696593974478!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                </div>
            </div>
            <FooterSection />
        </div>
    )
}

export default Quotation