import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter,
  FaCheckCircle,
  FaExclamationCircle,
  FaExclamationTriangle
} from 'react-icons/fa';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  // Keep track of error triggers for animation rerenders
  const [errorKeys, setErrorKeys] = useState({
    name: 0,
    email: 0,
    subject: 0,
    message: 0
  });
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset
  } = useForm();
  
  // Update error keys when errors change to force animation replay
  React.useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const newErrorKeys = {...errorKeys};
      Object.keys(errors).forEach(field => {
        newErrorKeys[field] += 1;
      });
      setErrorKeys(newErrorKeys);
    }
  }, [errors]);
  
  const onSubmit = (data) => {
    // Simulating form submission
    console.log("Form data:", data);
    
    // Simulate API call with a delay
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you! Your message has been sent successfully. I will get back to you soon.'
      });
      reset();
    }, 1500);
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="contact" ref={ref} className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-heading text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          Contact Me
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Feel free to reach out for collaborations or just a friendly hello!
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold text-gray-800 dark:text-white mb-6"
            >
              Get In Touch
            </motion.h3>
            
            {/* Contact Info Items */}
            <motion.div 
              variants={itemVariants}
              className="flex items-start space-x-4"
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-600 dark:text-blue-400">
                <FaEnvelope size={20} />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 dark:text-white">Email</h4>
                <a 
                  href="mailto:nikhilgupta12@gmail.com" 
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  nikhilgupta12@gmail.com
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex items-start space-x-4"
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-600 dark:text-blue-400">
                <FaPhone size={20} />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 dark:text-white">Phone</h4>
                <a 
                  href="tel:+919167778211" 
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  +91 9167778211
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex items-start space-x-4"
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-600 dark:text-blue-400">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 dark:text-white">Location</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Mumbai, Maharashtra, India
                </p>
              </div>
            </motion.div>
            
            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-6">
              <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-4">
                Connect With Me
              </h4>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/Nikhilgup12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub size={20} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/nikhil-kumargupta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaTwitter size={20} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 md:p-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Send Me a Message
            </h3>
            
            {formStatus.submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-md ${
                  formStatus.success 
                    ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300' 
                    : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300'
                }`}
              >
                <div className="flex items-center space-x-3">
                  {formStatus.success ? (
                    <FaCheckCircle className="text-green-500 dark:text-green-400" size={24} />
                  ) : (
                    <FaExclamationCircle className="text-red-500 dark:text-red-400" size={24} />
                  )}
                  <p>{formStatus.message}</p>
                </div>
                
                {formStatus.success && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    onClick={() => setFormStatus({ submitted: false, success: false, message: '' })}
                    className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Send Another Message
                  </motion.button>
                )}
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      key={`name-field-${errorKeys.name}`}
                      type="text"
                      id="name"
                      className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-md border focus:outline-none focus:ring-2 ${
                        errors.name 
                          ? 'border-red-500 focus:ring-red-500 dark:border-red-500 animate-shake pr-10' 
                          : 'border-gray-200 dark:border-gray-700 focus:ring-blue-500'
                      }`}
                      placeholder="John Doe"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <>
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500 dark:text-red-400">
                          <FaExclamationTriangle size={16} />
                        </div>
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                          {errors.name.message}
                        </p>
                      </>
                    )}
                  </div>
                </div>
                
                {/* Email Field */}
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      key={`email-field-${errorKeys.email}`}
                      type="email"
                      id="email"
                      className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-md border focus:outline-none focus:ring-2 ${
                        errors.email 
                          ? 'border-red-500 focus:ring-red-500 dark:border-red-500 animate-shake pr-10' 
                          : 'border-gray-200 dark:border-gray-700 focus:ring-blue-500'
                      }`}
                      placeholder="john@example.com"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                    />
                    {errors.email && (
                      <>
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500 dark:text-red-400">
                          <FaExclamationTriangle size={16} />
                        </div>
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                          {errors.email.message}
                        </p>
                      </>
                    )}
                  </div>
                </div>
                
                {/* Subject Field */}
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Subject
                  </label>
                  <div className="relative">
                    <input
                      key={`subject-field-${errorKeys.subject}`}
                      type="text"
                      id="subject"
                      className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-md border focus:outline-none focus:ring-2 ${
                        errors.subject 
                          ? 'border-red-500 focus:ring-red-500 dark:border-red-500 animate-shake pr-10' 
                          : 'border-gray-200 dark:border-gray-700 focus:ring-blue-500'
                      }`}
                      placeholder="Project Enquiry"
                      {...register("subject", { required: "Subject is required" })}
                    />
                    {errors.subject && (
                      <>
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500 dark:text-red-400">
                          <FaExclamationTriangle size={16} />
                        </div>
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                          {errors.subject.message}
                        </p>
                      </>
                    )}
                  </div>
                </div>
                
                {/* Message Field */}
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      key={`message-field-${errorKeys.message}`}
                      id="message"
                      rows="4"
                      className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-md border focus:outline-none focus:ring-2 ${
                        errors.message 
                          ? 'border-red-500 focus:ring-red-500 dark:border-red-500 animate-shake pr-10' 
                          : 'border-gray-200 dark:border-gray-700 focus:ring-blue-500'
                      }`}
                      placeholder="Your message here..."
                      {...register("message", { 
                        required: "Message is required",
                        minLength: {
                          value: 10,
                          message: "Message should be at least 10 characters"
                        }
                      })}
                    ></textarea>
                    {errors.message && (
                      <>
                        <div className="absolute right-3 top-4 text-red-500 dark:text-red-400">
                          <FaExclamationTriangle size={16} />
                        </div>
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                          {errors.message.message}
                        </p>
                      </>
                    )}
                  </div>
                </div>
                
                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-md font-medium shadow-lg hover:bg-blue-700 transition-all"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 