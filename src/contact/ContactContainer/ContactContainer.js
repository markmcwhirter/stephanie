import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import './contactContainerStyles.scss';


const ContactContainer = props => {
    return (
        <div className="contact__container" id="connect">
           
            <div className="contact__connect-container">
                <h2 className="contact__title contact__title--left">Connect <span className="g__text-emphasis">with us</span></h2>                
                <div className="contact__contact-group">
                    <h3>email</h3>
                    <a href="mailto:info@stephaniemckittrick.com">info@stephaniemckittrick.com</a>
                </div>
                <div className="contact__contact-group">
                </div>
            </div>
            <div className="contact__form-container">
                <h2 className="contact__title contact__title">Contact <span className="g__text-emphasis">our team</span></h2>
                <ContactForm />
            </div>
            <div id="homebar">
                <a href="#titlepage">Home</a>
            </div>
        </div>
        
        

    )
}

export default ContactContainer;
