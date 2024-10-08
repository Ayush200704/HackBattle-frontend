import React from 'react';
import FAQPage from './FAQPage.jsx'; // Import the FAQPage component
import Image1 from '../assets/w1.3.r.png';
import Image2 from '../assets/w2a.r.png';
import Image3 from '../assets/w2b.r.png';

const DivSlider = () => {
    return (
        <div className='w-full h-full py-[10%]' style={{ backgroundColor: '#39FF14' }}>
  {/* Your content here */}


            <div className='w-[90%] h-[100vh] sticky top-20 rounded-tl-3xl rounded-tr-3xl bg-white mx-auto flex'>
                {/* Strategy Section */}
                <div className='w-1/2 bg-black flex flex-col justify-center items-center text-center p-10 rounded-tl-3xl rounded-bl-3xl'>
                <div className='mx-auto mb-4'>
  <iframe 
    src='https://my.spline.design/particles-5f22f4dea11bd133bd1a982447684717/' 
    frameborder='0' 
    width='100%' 
    height='160%'
    allowFullScreen
  ></iframe>
</div>

                    <h2 className='text-white text-xl font-semibold mt-20'>Strategy</h2>
                    <p className='text-white mt-4'>
                        Describe the service and how customers or clients can benefit from it. 
                        It’s an opportunity to add a short description with relevant details, 
                        like pricing, duration and how to book.
                    </p>
                </div>

                {/* Execution Section */}
                <section className='flex justify-center items-center h-screen'>
  <div 
    className='p-10 rounded-tr-3xl rounded-br-3xl bg-cover bg-center ml-4 mt-20' 
    style={{ backgroundImage: `url(${Image1})`, width: '648px', height: '780px' }}
  >
    {/* Content here */}
  </div>
</section>




            </div>

            {/* Another Section */}
            <div className='w-[90%] h-[100vh] sticky top-20 rounded-tl-3xl rounded-tr-3xl bg-white mx-auto flex'>
                {/* Strategy Section */}
                <div className='w-1/2 bg-gray-100 flex flex-col justify-center items-center text-center p-10 rounded-tl-3xl rounded-bl-3xl'>
                <img src={Image2} alt='Strategy Icon' className='mx-auto mb-4 w-32 h-32' />

                    <h2 className='text-xl font-semibold'>Strategy</h2>
                    <p className='text-gray-600'>
                        Describe the service and how customers or clients can benefit from it. 
                        It’s an opportunity to add a short description with relevant details, 
                        like pricing, duration and how to book.
                    </p>
                </div>

                {/* Execution Section */}
                <div className='w-1/2 bg-whitw-100 flex flex-col justify-center items-center text-center p-10 rounded-tr-3xl rounded-br-3xl'>
                    <img src={Image3} alt='Execution Icon' className='mx-auto mb-4 w-32 h-32' />
                    <h2 className='text-xl font-semibold'>Execution</h2>
                    <p className='text-gray-600'>
                        Describe the service and how customers or clients can benefit from it. 
                        It’s an opportunity to add a short description with relevant details, 
                        like pricing, duration and how to book.
                    </p>
                </div>
            </div>

            {/* Another Section */}
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

            {/* FAQ Section */}
            <div className='w-full sticky top-20 rounded-tl-3xl rounded-tr-3xl bg-blue-100 mx-auto '>
                <FAQPage /> {/* Adding FAQPage component here */}
            </div>
        </div>
    );
}

export default DivSlider;
