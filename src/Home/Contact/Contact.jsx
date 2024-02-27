import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import dotenv from 'dotenv';
dotenv.config();

const Contact = () => {
    const formRef = useRef( null );
    const [ loading, setLoading ] = useState( false );
    const [ form, setForm ] = useState( {
        name: '',
        email: '',
        phone: '',
        message: ''

    } );

    const handleChange = ( e ) => {
        const { target } = e;
        const { name, value } = target;

        setForm( {
            ...form,
            [ name ]: value,
        } );
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        setLoading( true );

        emailjs
            .send(
                process.env.VITE_APP_EMAILJS_SERVICE_ID || "",
                process.env.VITE_APP_EMAILJS_TEMPLATE_ID || "",
                {
                    from_name: form.name,
                    to_name: "PortfolioSite",
                    from_email: form.email,
                    to_email: "rjrupom221@gmail.com",
                    message: form.message,
                },
                process.env.VITE_APP_EMAILJS_PUBLIC_KEY,
            )
            .then(
                () => {
                    setLoading( false );
                    Swal.fire( {
                        title: 'Message Sent!',
                        text: 'We will get back to you as soon as possible.',
                        icon: 'success',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    } );

                    setForm( {
                        name: "",
                        email: "",
                        message: "",
                        phone: "",
                    } );
                },
                // @ts-ignore
                ( error ) => {
                    setLoading( false );
                    // alert("Ahh, something went wrong. Please try again.");
                    toast.error( "Ahh, something went wrong. Please try again." );
                }
            );
    }


    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="text-center">
                <h1 className='text-3xl font-bold text-gray-800 sm:text-4xl'>Contact Us</h1>
                <p className='mt-1 text-gray-600 dark:text-gray-400'>
                    We'd Love to hear from you. Here's how you can reach us...
                </p>
            </div>
            <div className="max-w-2xl lg:max-w-5xl mx-auto">
                {/* <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="flex flex-col items-center p-6 border rounded-xl">
                        <h2 className="mb-4 text-xl font-semibold text-black">Send us a message</h2>
                        <p className="text-center text-gray-600 dark:text-gray-400">
                            We will get back to you as soon as possible.
                        </p>
                    </div>
                    <div className="flex flex-col items-center p-6 border rounded-xl">
                        <h2 className="mb-4 text-xl font-semibold text-black">Give us a call</h2>
                        <p className="text-center text-gray-600 dark:text-gray-400">
                            You can call us at +880 123 456 7890
                        </p>
                    </div>
                    <div className="flex flex-col items-center p-6 border rounded-xl">
                        <h2 className="mb-4 text-xl font-semibold text-black">Send us an email</h2>
                        <p className="text-center text-gray-600 dark:text-gray-400">
                            You can email us at
                            <a href="mailto:test@gmail.com" className="text-blue-500">
                            </a>
                        </p>
                    </div>
                </div> */}

                <div className="mt-12 grid items-center">
                    <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8">
                        <h2 className="mb-8 text-xl text-center font-semibold text-balck">Fill in the form</h2>
                        <form
                            ref={ formRef }
                            onSubmit={ handleSubmit }
                            action="" className="grid grid-cols-1 gap-6">

                            <label className='flex flex-col'>
                                <span className='text-black font-medium mb-4'>Your Name</span>
                                <input
                                    type='text'
                                    name='name'
                                    value={ form.name }
                                    onChange={ handleChange }
                                    placeholder="What's your good name?"
                                    className='bg-gray-50 p-4 rounded-lg outline-none border-none font-medium'
                                />
                            </label>

                            <label className='flex flex-col'>
                                <span className='text-black font-medium mb-4'>Your Email</span>
                                <input
                                    type='email'
                                    name='email'
                                    value={ form.email }
                                    onChange={ handleChange }
                                    placeholder="What's your email?"
                                    className='bg-gray-50 p-4 rounded-lg outline-none border-none font-medium'
                                />
                            </label>
                            <label className='flex flex-col'>
                                <span className='text-black font-medium mb-4'>Your Phone</span>
                                <input
                                    type='phone'
                                    name='phone'
                                    value={ form.phone }
                                    onChange={ handleChange }
                                    placeholder="Enter Your Phone Number"
                                    className='bg-gray-50 p-4 rounded-lg outline-none border-none font-medium'
                                />
                            </label>

                            <label className='flex flex-col'>
                                <span className='text-black font-medium mb-4'>Your Message</span>
                                <textarea
                                    name='message'
                                    value={ form.message }
                                    onChange={ handleChange }
                                    placeholder="What's your message?"
                                    className='bg-gray-50 p-4 rounded-lg outline-none border-none font-medium'
                                />
                            </label>

                            <button
                                type='submit'
                                className='bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-all duration-300'>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Contact;