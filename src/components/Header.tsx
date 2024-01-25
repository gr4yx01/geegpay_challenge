import { BellOutlineIcon, CalendarIcon, SearchIcon } from "@/components/icons"
import {  KeyboardArrowDownOutlined } from "@mui/icons-material"
import ProfileImage from '@/assets/images/profile.png'


const Header = () => {
  return (
    <div className="flex justify-between items-center pt-[18px] bg-body font-plusSans p-6 px-10 border-b overflow-hidden">
      <div>
        <span className="text-xl font-semibold">Dashboard</span>
      </div>
      <div className="flex space-x-10 items-center">
        <div className="bg-white p-3 rounded-full w-96 border flex items-center">
          <div className="">
            <SearchIcon />
            </div>
          <input type="text" placeholder='Search...' className="outline-none pl-4"/>
        </div>
        <div className="flex items-center space-x-3">
          <CalendarIcon />
          <span className="font-inter font-medium">November 15, 2024</span>
        </div>
        <div className="flex space-x-3 items-center">
        <div className="p-2 border rounded-full">
          <BellOutlineIcon />
        </div>
        <div className="flex border p-1 rounded-full items-center space-x-3 px-2">
          <img src={ProfileImage} alt="" className="h-10 w-10"/>
          <div className="flex flex-col font-inter items-end">
            <span className="text-lg #787486">Justin Bergson</span>
            <span className=" text-[#787486]">Justin@gmail.com</span>
          </div>
          <div>
            <KeyboardArrowDownOutlined />
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Header