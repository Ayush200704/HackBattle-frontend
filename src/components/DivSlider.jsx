import React from 'react';

const DivSlider = () => {
    return (
        <div className='bg-black w-full h-full py-[10%]'>
            <div className='w-[90%] h-[100vh] sticky top-20 rounded-tl-3xl rounded-tr-3xl bg-white mx-auto flex'>
                {/* Strategy Section */}
                <div className='w-1/2 bg-blue-50 flex flex-col justify-center items-center text-center p-10 rounded-tl-3xl rounded-bl-3xl'>
                    <img src='strategy-icon-url' alt='Strategy Icon' className='mx-auto mb-4' />
                    <h2 className='text-xl font-semibold'>Strategy</h2>
                    <p className='text-gray-600'>
                        Describe the service and how customers or clients can benefit from it. 
                        It’s an opportunity to add a short description with relevant details, 
                        like pricing, duration and how to book.
                    </p>
                </div>

                {/* Execution Section */}
                <div className='w-1/2 bg-green-100 flex flex-col justify-center items-center text-center p-10 rounded-tr-3xl rounded-br-3xl'>
                    <img src='execution-icon-url' alt='Execution Icon' className='mx-auto mb-4' />
                    <h2 className='text-xl font-semibold'>Execution</h2>
                    <p className='text-gray-600'>
                        Describe the service and how customers or clients can benefit from it. 
                        It’s an opportunity to add a short description with relevant details, 
                        like pricing, duration and how to book.
                    </p>
                </div>
            </div>

            {/* Keep the overall div with rounded edges */}
            <div className='w-[90%] h-[100vh] sticky top-20 rounded-tl-3xl rounded-tr-3xl bg-white mx-auto flex'>
                {/* Strategy Section */}
                <div className='w-1/2 bg-yellow-50 flex flex-col justify-center items-center text-center p-10 rounded-tl-3xl rounded-bl-3xl'>
                    <img src='strategy-icon-url' alt='Strategy Icon' className='mx-auto mb-4' />
                    <h2 className='text-xl font-semibold'>Strategy</h2>
                    <p className='text-gray-600'>
                        Describe the service and how customers or clients can benefit from it. 
                        It’s an opportunity to add a short description with relevant details, 
                        like pricing, duration and how to book.
                    </p>
                </div>

                {/* Execution Section */}
                <div className='w-1/2 bg-green-100 flex flex-col justify-center items-center text-center p-10 rounded-tr-3xl rounded-br-3xl'>
                    <img src='execution-icon-url' alt='Execution Icon' className='mx-auto mb-4' />
                    <h2 className='text-xl font-semibold'>Execution</h2>
                    <p className='text-gray-600'>
                        Describe the service and how customers or clients can benefit from it. 
                        It’s an opportunity to add a short description with relevant details, 
                        like pricing, duration and how to book.
                    </p>
                </div>
            </div>

            <div className='w-[90%] h-[100vh] sticky top-20 rounded-tl-3xl rounded-tr-3xl bg-white mx-auto flex'>
                {/* Strategy Section */}
                <div className='w-1/2 bg-green-50 flex flex-col justify-center items-center text-center p-10 rounded-tl-3xl rounded-bl-3xl'>
                    <img src='strategy-icon-url' alt='Strategy Icon' className='mx-auto mb-4' />
                    <h2 className='text-xl font-semibold'>Strategy</h2>
                    <p className='text-gray-600'>
                        Describe the service and how customers or clients can benefit from it. 
                        It’s an opportunity to add a short description with relevant details, 
                        like pricing, duration and how to book.
                    </p>
                </div>

                {/* Execution Section */}
                <div className='w-1/2 bg-green-100 flex flex-col justify-center items-center text-center p-10 rounded-tr-3xl rounded-br-3xl'>
                    <img src='execution-icon-url' alt='Execution Icon' className='mx-auto mb-4' />
                    <h2 className='text-xl font-semibold'>Execution</h2>
                    <p className='text-gray-600'>
                        Describe the service and how customers or clients can benefit from it. 
                        It’s an opportunity to add a short description with relevant details, 
                        like pricing, duration and how to book.
                    </p>
                </div>
            </div>
            <div className='w-full h-[100vh] sticky top-20 rounded-tl-3xl rounded-tr-3xl bg-blue-100 mx-auto '></div>
        </div>
    );
}

export default DivSlider;
