import Circles from '../../components/Circles';
import Bulb from "../../components/Bulb";
import { BsArrowRight } from 'react-icons/bs';

import { motion } from 'framer-motion';

import { fadeIn } from '../../variants';
import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, subject, message }),
      });

      const data = await res.json();

      if (res.ok) {
        console.log('Email sent successfully:', data.message);
        // Optionally clear the form after successful submission
        setName('');
        setSubject('');
        setMessage('');
        alert('Your message has been sent!');
      } else {
        console.error('Error sending email:', data.message);
        alert(`Failed to send message: ${data.message}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div className='h-full bg-primary/30' >
      <Circles />
      <div className='container mx-auto py-32 text-center xl:text-left flex
      items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px] '>
          <motion.h2 
            variants={fadeIn('up', 0.2)} 
            initial="hidden" 
            animate="show" 
            exit="hidden"
            className='text-4xl font-bold mb-6'>
            Let&apos;s <span className='text-accent'>connect.</span>
          </motion.h2>
          <motion.form 
          variants={fadeIn('up', 0.4)} 
            initial="hidden" 
            animate="show" 
            exit="hidden"
          className='flex-1 flex flex-col gap-6 w-full mx-auto'>
            <div className='flex gap-x-6 w-full'>
              <input type='text' placeholder='name' className='input' value={name} onChange={(e) => setName(e.target.value)} />
              {/* <input type='email' placeholder='email' className='input' /> */}
            </div>
            <input type='text' placeholder='subject' className='input' value={subject} onChange={(e) => setSubject(e.target.value)} />
            <textarea className='textarea' placeholder='message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <button type="submit" onClick={handleSubmit} className='btn rounded-full border border-white/50 max-w-[170px]
            px-8 transition-all duration-300 flex items-center justify-center 
            overflow-hidden hover:border-accent group'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 '>
                Let&apos;s talk </span> 
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0
              group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
          </motion.form>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Contact;
