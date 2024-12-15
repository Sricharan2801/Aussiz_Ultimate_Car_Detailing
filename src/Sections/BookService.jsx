import { useState } from 'react';
import { services } from '../utils/util';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const BookService = () => {
    const [formDetails, setFormDetails] = useState({
        fullName: '',
        email: '',
        phone: '',
        serviceType: '',
        orderType: '',
        additionalDetails: '',
    });

    const changeHandler = (e) => {
        console.log(`${e.target.name}: ${e.target.value}`);

        setFormDetails({
            ...formDetails,
            [e.target.name]: e.target.value,
        });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        const { fullName, email, phone, serviceType, orderType } = formDetails;
        if (!fullName || !email || !phone || !serviceType || !orderType) {
            toast.error('Please fill the required fields')
            return;
        }

        try {
            const templateParams = {
                to_name: 'Shiva',
                from_name: fullName,
                email: formDetails.email,
                phone: formDetails.phone,
                serviceType: formDetails.serviceType,
                orderType: formDetails.orderType,
                message: formDetails.additionalDetails || 'N/A',
                year: new Date().getFullYear(),
            }

            const response = await emailjs.send(
                'service_hy365xv', // Replace with your EmailJS Service ID
                'template_ztnwcbl', // Replace with your EmailJS Template ID
                templateParams,
                'r85n0YCNN6KNykrF7' // Replace with your EmailJS Public Key
            );

            if (response.status === 200) {
                toast.success('Your request has been submitted successfully!');
                setFormDetails({
                    fullName: '', email: '', phone: '', serviceType: '', orderType: '', additionalDetails: '',
                })
            } else toast.error('Failed to send your request. Please try again later.')
        } catch (error) {
            console.error('Error sending email:', error);
            toast.error('An error occurred. Please try again later.');
        }
    };

    return (
        <section
            id='getQuote'
            className='section-top flex lg:flex-row flex-col items-center '
        >
            <div className='lg:w-[40%] w-full lg:mb-52'>
                <h2 className='page-title text-center py-5'>
                    Get a Quote & Book Your Service Today
                </h2>
                <p className='text-center px-2 text-sm lg:text-base'>
                    Easily request a quote or book a <strong>car detailing service</strong> in{' '}
                    <strong>Canberra</strong>. Choose from a range of services like{' '}
                    <strong>Ceramic Coating</strong>, <strong>Interior Detailing</strong>,{' '}
                    <strong>Ultimate Detailing</strong>, and more.
                </p>
            </div>

            <div className='lg:w-[60%] w-[85%] lg:px-8 py-5'>
                <form
                    className='lg:w-[80%] w-full flex flex-col justify-around bg-gradient-to-r from-white to-gray-100 shadow-lg rounded-2xl lg:py-6 py-4'
                    onSubmit={submitHandler}
                >
                    <div className='w-full flex flex-col px-6'>
                        <label htmlFor='fullName' className='mb-1 text-sm font-medium text-gray-700'>
                            Name <span className='text-red-600'>*</span>
                        </label>
                        <input
                            type='text'
                            name='fullName'
                            value={formDetails.fullName}
                            id='fullName'
                            placeholder='Enter your name'
                            className='w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 hover:shadow-md transition-all duration-200'
                            onChange={(e) => changeHandler(e)}
                        />
                    </div>

                    <div className='w-full flex flex-col px-6 py-2'>
                        <label htmlFor='email' className='mb-1 text-sm font-medium text-gray-700'>
                            Email <span className='text-red-600'>*</span>
                        </label>
                        <input
                            type='email'
                            name='email'
                            value={formDetails.email}
                            id='email'
                            placeholder='Enter your email'
                            className='w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 hover:shadow-md transition-all duration-200'
                            onChange={(e) => changeHandler(e)}
                        />
                    </div>

                    <div className='w-full flex flex-col px-6 py-2'>
                        <label htmlFor='phone' className='mb-1 text-sm font-medium text-gray-700'>
                            Phone <span className='text-red-600'>*</span>
                        </label>
                        <input
                            type='tel'
                            name='phone'
                            value={formDetails.phone}
                            id='phone'
                            placeholder='Enter your phone number'
                            className='w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 hover:shadow-md transition-all duration-200'
                            onChange={(e) => changeHandler(e)}
                        />
                    </div>

                    <div className='w-full flex flex-col px-6 py-2'>
                        <label
                            htmlFor='serviceType'
                            className='mb-1 text-sm font-medium text-gray-700'
                        >
                            Service Type <span className='text-red-600'>*</span>
                        </label>
                        <select
                            name='serviceType'
                            id='serviceType'
                            value={formDetails.serviceType}
                            className='w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 hover:shadow-md transition-all duration-200'
                            onChange={(e) => changeHandler(e)}
                        >
                            <option value='' disabled>
                                Select a Service
                            </option>
                            {services.map((service) => (
                                <option key={service.id} value={service.serviceName}>
                                    {service.serviceName}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className='w-full flex flex-col px-6 py-2'>
                        <label htmlFor='orderType' className='mb-1 text-sm font-medium text-gray-700'>
                            Order Type <span className='text-red-600'>*</span>
                        </label>
                        <select
                            name='orderType'
                            id='orderType'
                            value={formDetails.orderType}
                            className='w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 hover:shadow-md transition-all duration-200'
                            onChange={(e) => changeHandler(e)}
                        >
                            <option value='' disabled>
                                Select an Order Type
                            </option>
                            <option value='Need Quotation'>Get a Quote</option>
                            <option value='Need Service'>Book Service</option>
                        </select>
                    </div>

                    <div className='w-full flex flex-col px-6 py-2'>
                        <label
                            htmlFor='additionalDetails'
                            className='mb-1 text-sm font-medium text-gray-700'
                        >
                            Additional Details
                        </label>
                        <textarea
                            name='additionalDetails'
                            id='additionalDetails'
                            cols='30'
                            rows='3'
                            value={formDetails.additionalDetails}
                            placeholder='Enter any additional details here...'
                            className='w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 hover:shadow-md transition-all duration-200'
                            onChange={(e) => changeHandler(e)}
                        />
                    </div>

                    <div className='flex justify-center items-center py-2'>
                        <button className='bg-blue-600 text-white py-2 px-8 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default BookService;
