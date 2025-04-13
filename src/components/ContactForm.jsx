import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

/**
 * ContactForm Component
 * A form for users to send messages with validation and error handling
 */
const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors } 
  } = useForm();
  
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Send form data to backend API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send message. Please try again.');
      }
      
      // On success
      setSubmitSuccess(true);
      reset(); // Clear form
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
      
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {/* Success message */}
      {submitSuccess && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
          <p className="font-medium">Message sent successfully!</p>
          <p>Thank you for reaching out. I'll get back to you soon.</p>
        </div>
      )}
      
      {/* Error message */}
      {submitError && (
        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
          <p className="font-medium">Something went wrong:</p>
          <p>{submitError}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Name field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Your name"
            {...register('name', { 
              required: 'Please enter your name',
              maxLength: {
                value: 100,
                message: 'Name cannot exceed 100 characters'
              }
            })}
          />
          {errors.name && (
            <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>
        
        {/* Email field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Your email address"
            {...register('email', { 
              required: 'Please enter your email',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Please enter a valid email address'
              }
            })}
          />
          {errors.email && (
            <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        
        {/* Subject field */}
        <div className="mb-4">
          <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.subject ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Message subject"
            {...register('subject', { 
              required: 'Please enter a subject',
              maxLength: {
                value: 200,
                message: 'Subject cannot exceed 200 characters'
              }
            })}
          />
          {errors.subject && (
            <p className="mt-1 text-red-500 text-sm">{errors.subject.message}</p>
          )}
        </div>
        
        {/* Message field */}
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Your message"
            {...register('message', { 
              required: 'Please enter your message',
              minLength: {
                value: 10,
                message: 'Message must be at least 10 characters'
              },
              maxLength: {
                value: 1000,
                message: 'Message cannot exceed 1000 characters'
              }
            })}
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>
        
        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;