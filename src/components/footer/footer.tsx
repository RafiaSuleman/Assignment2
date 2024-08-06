import React from 'react'

const Footer = () => {
  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-1 bg-[#1F2937] text-white px-[25px] py-[30px]'>
        <div>
          <h1 className='text-lg font-semibold mb-[15px] mt-[20px]'>About Us</h1>
          <p className='mr-[40px] text-sm '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div>
          <h1 className='mb-[15px] text-lg font-semibold mt-[20px]'>Quick Links</h1>
          <ul className='space-y-1 text-sm'>
            <li ><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Services</a></li>
            <li><a href='#'>Contact</a></li>
          </ul>
        </div>
        <div>
          <h1 className=' mb-[15px] text-lg font-semibold mt-[20px]'>Contact Us</h1>
          <span className='text-sm'>
              123 Example Street City,<br/>
              State 12345<br/>
              Email: info@example.com<br/>
              Phone: (123) 456-7890<br/>
            </span>
        </div>
    </div>
  )
}
export default Footer
