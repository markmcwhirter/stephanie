import React, { useState } from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const url = `https://YOUR_MAILCHIMP_INSTANCE.api.mailchimp.com/3.0/lists/YOUR_LIST_ID/members`;

const MailchimpSignupForm = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    email_address: email,
                    status: 'subscribed' 
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `apikey YOUR_MAILCHIMP_API_KEY`
                }
            });

            if (response.ok) {
                setStatus('success');
                setEmail(''); // Clear the input field
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Enter your email" 
                required
            />
            <button type="submit">Subscribe</button>
            {status === 'success' && <p>Thank you for subscribing!</p>}
            {status === 'sending' && <p>Sending...</p>}
            {status === 'error' && <p>An error occurred. Please try again.</p>} 
        </form>
    );
};

export default MailchimpSignupForm;
