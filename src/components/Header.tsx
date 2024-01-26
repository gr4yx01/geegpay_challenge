import { BellOutlineIcon, CalendarIcon, SearchIcon, LogoIcon } from "@/components/icons"
import {  KeyboardArrowDownOutlined } from "@mui/icons-material"
import ProfileImage from '@/assets/images/profile.png'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';



const Header = () => {
  return (
    <>
    <div className="flex justify-between items-center pt-[18px] bg-body font-plusSans p-6 px-10 border-b lg:hidden">
        <div className="lg:hidden">
          <MenuOutlinedIcon />
        </div>
      <div className="lg:hidden">
        <LogoIcon />
      </div>
      <div className="flex items-center gap-4 lg:hidden">
        <div className="p-2 border rounded-full">
          <BellOutlineIcon />
        </div>
        <div className=" border p-2 rounded-full items-center space-x-3 lg:hidden">
          <img src={ProfileImage} alt="" className="h-10 w-10"/>
        </div>
      </div>
    </div>
    <div className="lg:flex justify-between items-center pt-[18px] bg-body font-plusSans p-6 px-10 border-b overflow-hidden hidden ">
      <div>
        <span className="text-xl font-semibold">Dashboard</span>
      </div>
      <div className="space-x-10 items-center flex ">
        <div className="flex bg-white p-3 rounded-full w-96 border items-center ">
          <div className="">
            <SearchIcon />
            </div>
          <input type="text" placeholder='Search...' className="outline-none pl-4 "/>
        </div>
        <div className="flex items-center space-x-3 ">
          <CalendarIcon />
          <span className="font-inter font-medium">November 15, 2024</span>
        </div>
        <div className="flex space-x-3 items-center ">
        <div className="p-2 border rounded-full">
          <BellOutlineIcon />
        </div>
        <div className="flex border p-1 rounded-full items-center space-x-3 px-2">
          <img src={ProfileImage} alt="" className="h-10 w-10"/>
          <div className="flex flex-col font-inter items-end ">
            <span className="text-lg #787486">Justin Bergson</span>
            <span className=" text-[#787486]">Justin@gmail.com</span>
          </div>
          <div className="">
            <KeyboardArrowDownOutlined />
          </div>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header