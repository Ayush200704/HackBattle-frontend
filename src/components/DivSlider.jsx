import React from 'react'

const DivSlider = () => {
    return (
        <div className='bg-black w-full h-full py-[10%]'>
            <div className='w-[90%] h-[100vh] sticky top-20 rounded-tl-3xl rounded-tr-3xl bg-red-100 mx-auto '>
            </div>
            <div className='w-[90%] h-[100vh] sticky top-20 rounded-tl-3xl rounded-tr-3xl bg-yellow-50 mx-auto '>
            </div>
            <div className='w-[90%] h-[100vh] sticky top-20 rounded-tl-3xl rounded-tr-3xl bg-green-100 mx-auto '>
            </div>
            <div className='w-full h-[100vh] sticky top-20 rounded-tl-3xl rounded-tr-3xl bg-blue-100 mx-auto '></div>
        </div>
    )
}

export default DivSlider