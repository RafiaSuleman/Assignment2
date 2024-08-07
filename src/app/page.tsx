import Card from "@/components/card/card";
import Footer from "@/components/footer/footer";
import Image from "next/image";

export default function Home() {
  return (  
  <div className =  "overflow-hidden bg-[#F3F4F6] ">
    <nav className="bg-[#2563EB] text-white flex justify-center sm:justify-between  items-center flex-wrap px-0 sm:px-[90px] py-[16px]">
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
    <div className="grid md:grid-cols-3  sm:grid-cols-1">
      <div className="bg-[#22C55E] m-[10px] py-7 px-[25px] rounded-lg text-white">
        <h1 className="mb-[10px] text-xl font-bold">Card 1</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, voluptatibus!</p></div>
      <div className=" col-span-2 bg-[#EAB308] m-[10px] py-7 px-[25px] rounded-lg text-white ">
        <h1 className="mb-[10px] text-xl font-bold">Card 2</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, earum.</p>
      </div>
    </div>
    <div className="grid md:grid-cols-3 sm:grid-cols-1">
        <div className="bg-[#F97316] m-[10px] py-7 px-[25px] rounded-lg text-white">
          <h1 className="mb-[10px] text-xl font-bold">Card 1</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, voluptatibus!</p>
        </div>
        <div className="bg-[#3B82F6] m-[10px] py-7 px-[25px] rounded-lg text-white">
          <h1 className="mb-[10px] text-xl font-bold">Card 1</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, voluptatibus!</p>
        </div>
        <div className="bg-[#22C55E] m-[10px] py-7 px-[25px] rounded-lg text-white">
        <h1 className="mb-[10px] text-xl font-bold">Card 1</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, voluptatibus!</p></div>
    </div>
    <div className="grid md:grid-cols-4 lg:grid-cols-4 grid-cols-2">
        <div className="bg-[#EF4444] h-48 rounded-lg flex justify-center items-center text-white m-[10px]">1</div>
        <div className="bg-[#22C55E] h-48 rounded-lg flex justify-center items-center text-white m-[10px]">2</div>
        <div className="bg-[#3B82F6] h-48 rounded-lg flex justify-center items-center text-white m-[10px]">3</div>
        <div className="bg-[#EC4899] h-48 rounded-lg flex justify-center items-center text-white m-[10px]">4</div>
    </div>
    <div className="grid md:grid-cols-3 sm:grid-cols-1">
        <div className="col-span-2 bg-white rounded-lg m-[10px] px-[25px] py-[15px] ">
          <h1 className="text-xl font-bold mb-[10px] mt-[10px]">Main Content</h1>
          <p className="mb-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, obcaecati!</p>
          <div className="grid grid-cols-2 ">
              <div className="bg-[#38BDF8] rounded-lg px-[25px] mb-[20px] ">
                <h1 className="text-xl mt-[15px] mb-[10px]">Title1</h1>
                <p className="mb-[20px]">Lorem ipsum dolor sit amet.Vero, obcaecati!</p>
                </div>
                <div className="bg-[#A3E635] rounded-lg px-[25px] mb-[20px] ml-[10px] ">
                <h1 className="text-xl mt-[15px] mb-[10px]">Title1</h1>
                <p className="mb-[20px]">Lorem ipsum dolor sit amet.Vero, obcaecati!</p>
                </div>
          </div>
        </div>
        <div className="bg-white rounded-lg m-[10px]  px-[20px] w-[40]">
          <h1 className="text-xl mt-[20px] "> Slide bar</h1>
            <ul className="mt-[15px]">
              <li className="bg-[#F0ABFC] px-[10px] min-w-80 py-[9px] rounded-md ">Item 1</li>
              <li className="bg-[#6EE7B7] px-[10px] min-w-80 py-[9px] rounded-md mt-[10px]">Item 2</li>
              <li className="bg-[#FCD34D] px-[10px] min-w-80 py-[9px] rounded-md mt-[10px] ">Item 1</li>
            </ul>
        </div>
    </div>
    <Card/>
    <Footer/>
  </div>
  );
}
