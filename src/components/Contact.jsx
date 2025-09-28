import React, { useState } from 'react';


const Contact = () => {
    const [formData, setFormData] = useState({
        email: '',
        mobile: '',
        feedback: '',
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for your feedback!\n\nEmail: ${formData.email}\nMobile: ${formData.mobile}`);
        console.log('Form submitted:', formData);
      
        setFormData({ email: '', mobile: '', feedback: '' }); 
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

   

    return (
        <div className='contact' >
            <h1 className='hey'>GET IN TOUCH</h1>
            <div className='contacttext'>
                We'd love to hear from you! Whether you have a question, feedback, or need assistance, our team is here to help. Reach out to us through the information below, or use the form to send us your feedback directly. We’ll get back to you as soon as possible. Your satisfaction is our top priority, and we’re committed to providing the best service possible. Let’s stay connected!
            </div>
            <div className="contcont"></div>
            <div className='call'>Phone: 9999009909</div>
            <div className='call'>Email: foodielab420@gmail.com</div>


            <div className='contact-form'>
                <h2 className='form-heading'>Send Us Your Feedback</h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className='form-input'
                            placeholder='Enter your email'
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='mobile'>Mobile Number</label>
                        <input
                            type='tel'
                            id='mobile'
                            name='mobile'
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                            className='form-input'
                            placeholder='Enter your mobile number'
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='feedback'>Feedback</label>
                        <textarea
                            id='feedback'
                            name='feedback'
                            value={formData.feedback}
                            onChange={handleChange}
                            required
                            className='form-input'
                            placeholder='Share your feedback'
                            rows='5'
                        />
                    </div>
                    <button type='submit' className='submit-button'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;