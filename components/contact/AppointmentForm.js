import React, { useState } from 'react';

const AppointmentForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        agreeToPrivacyPolicy: true
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submissionError, setSubmissionError] = useState(false);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitted(false);
        setSubmissionError(false);

        try {
            const response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    name: formData.name
                }),
            });

            if (response.ok) {
                console.log('Successfully subscribed to the waitlist');
                setIsSubmitted(true);
                setFormData({ name: '', email: '', agreeToPrivacyPolicy: true });
            } else {
                console.log('Failed to subscribe to the waitlist');
                setSubmissionError(true);
            }
        } catch (error) {
            console.error('There was an error submitting the form:', error);
            setSubmissionError(true);
        }
    };

    return (
        <div className="form-block w-form">
            <form onSubmit={handleSubmit} aria-label="Appointments">
                <div className="field">
                    <label htmlFor="name" className="field-label">Name</label>
                    <input type="text" className="text_field w-input" name="name" placeholder="Your name" id="name"
                           required value={formData.name} onChange={handleChange}/>
                </div>
                <div className="field">
                    <label htmlFor="Email" className="field-label">E-mail</label>
                    <input type="email" className="text_field w-input" name="email" placeholder="Your email address"
                           id="Email" required value={formData.email} onChange={handleChange}/>
                </div>
                <div className="checkbox_privacy">
                    <label className="w-checkbox checkbox-field">
                        <input type="checkbox" id="checkbox" name="agreeToPrivacyPolicy"
                               className="w-checkbox-input checkbox" required checked={formData.agreeToPrivacyPolicy}
                               onChange={handleChange}/>
                        <span className="checkbox-label w-form-label">I have read and accept the
                            <a href="#" className="privacy_link"> Privacy Policy</a>
                        </span>
                    </label>
                </div>
                <input type="submit" value="Submit" className="submit_button w-button"/>
            </form>
            {/* Success and Error messages */}
            {isSubmitted && (
                <div className="success-message w-form-done" tabIndex="-1" aria-label="Appointments success">
                    <div className="text-block-28">Thank you! Your submission has been received!</div>
                </div>
            )}
            {submissionError && (
                <div className="error-message w-form-fail" tabIndex="-1" aria-label="Appointments failure">
                    <div className="text-block-29">Oops! Something went wrong while submitting the form.</div>
                </div>
            )}
        </div>
    );
}

export default AppointmentForm;
