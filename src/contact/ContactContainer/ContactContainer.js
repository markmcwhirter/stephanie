import React from 'react';
import './contactContainerStyles.scss';


const ContactContainer = props => {


    return (
        <div className="contact__container" id="connect">
           
            <div className="contact__connect-container">
                <h2 className="contact__title contact__title--left">Connect <span className="g__text-emphasis">with us</span></h2>
                <div className="contact__contact-group">
                    <h3>phone</h3>
                    <a href="tel:7183107876">(718) 310–7876</a>
                </div>
                <div className="contact__contact-group">
                    <h3>email</h3>
                    <a href="mailto:info@genhybridsystems.com">info@genhybridsystems.com</a>
                </div>
                <div className="contact__contact-group">
                </div>
            </div>
            <div className="contact__form-container">
                <h2 className="contact__title contact__title--right">Contact <span className="g__text-emphasis">our team</span></h2>
                <ContactForm />
            </div>

        </div>

    )
}

export default ContactContainer;
