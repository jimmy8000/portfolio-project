"use client";

import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Ensure this package is installed
import { useSectionInView } from '@/lib/hooks';

export const ContactMe: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const controls = useAnimation();
  const inView  = useInView({ triggerOnce: true, threshold: 0.2 });
  
  const { ref } = useSectionInView("Contact", 0.5);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs.sendForm('service_w3j3m96', 'template_hj51906', form.current, 'HzU5Ydr7UzqjcPmDi')
        .then(
            () => {
                alert('Message successfully sent!');
                if (form.current) {
                    form.current.reset();
                }
            },
            (error) => {
                alert('Failed to send the message, please try again.');
                console.error('FAILED...', error.text);
            },
        );
  };

  const containerVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delayChildren: 0.3, staggerChildren: 0.2 } },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <motion.div 
      ref={ref}
      id='contact'
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="p-8 max-w-lg mx-auto bg-white rounded-xl shadow-lg flex flex-col items-center space-y-6 mb-28 scroll-mt-28"
    >
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg">
        <motion.div className="flex flex-wrap -mx-3 mb-6" variants={containerVariants}>
          <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="from_name">
              Name
            </label>
            <motion.input 
              initial={{ x: -10 }}
              animate={{ x: 0 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              type="text" 
              name="from_name" 
              required 
            />
          </div>
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="user_email">
              Email
            </label>
            <motion.input 
              initial={{ x: -10 }}
              animate={{ x: 0 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              type="email" 
              name="user_email" 
              required 
            />
          </div>
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
              Message
            </label>
            <motion.textarea 
              initial={{ x: -10 }}
              animate={{ x: 0 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              className="no-resize appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-48 resize-none" 
              name="message" 
              required
            ></motion.textarea>
          </div>
          <div className="w-full px-3">
            <motion.input 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-700 hover:bg-gray-950 text-white font-bold py-2 px-4 rounded cursor-pointer focus:outline-none focus:shadow-outline" 
              type="submit" 
              value="Send" 
            />
          </div>
        </motion.div>
      </form>
    </motion.div>
  );
};
