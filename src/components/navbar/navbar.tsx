import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-[#2563EB] text-white flex justify-center sm:justify-between  items-center flex-wrap px-0 sm:px-[90px] py-[16px]  fixed relative top-0">
    <div><h1 className="text-white font-bold text-[25px]"> Assignment 2</h1></div>
      <div>
        <ol className="list-none ml-[5px] flex gap-3 text-center flex-wrap justify-center item-center ">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
        </ol>
    </div>
  </nav>
  )
}

export default Navbar
