import React, { useRef } from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';

import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';

import emailjs from '@emailjs/browser';




const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2gbpyxo', 'template_2avb0nf', form.current, {
        publicKey: 'GGunPbn_ThxsccQ00FSnU',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id='contactPage'>
      <div id='clients'>
        <h1 className='contactPageTitle'>My clients</h1>

        <p className='clientDesc'>
          I have had the opportunity to work with a diverse group of companies. some of the notable companies I have worked with includes
        </p>

        <div className='clientImgs'>
        <img src={Walmart} alt='Walmart' className='clientImg' />
        <img src={Adobe} alt='Adobe' className='clientImg' />
        <img src={Microsoft} alt='Microsoft' className='clientImg' />
        <img src={Facebook} alt='Facebook' className='clientImg' />

        </div>
      </div>

      <div id='contacts'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>please fill out rhe form below to discuss any work opportunities.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type='text' className='name' placeholder='Your Name' name='your_name' />
          <input type='email' className='email' placeholder='Your Email' name='your_email' />
          <textarea className='msg' name='message' rows='5' placeholder='Your Message' ></textarea>
          <button type='submit' value='Send' className='submitBtn'>Submit</button>

          <div className='links'>
            <img src={FacebookIcon} alt='FacebookIcon' className='link' />
            <img src={TwitterIcon} alt='TwitterIcon' className='link' />
            <img src={YoutubeIcon} alt='YoutubeIcon' className='link' />
            <img src={InstagramIcon} alt='InstagramIcon' className='link' />

          </div>
        </form>

      </div>

    </section>
  )
}

export default Contact;