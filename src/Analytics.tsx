import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, Tooltip, Legend, BarElement } from "chart.js";
import { Bar } from 'react-chartjs-2';
import { BoxTickIcon, CoinIcon, RotateIcon, ShoppingCartIcon } from "@/components/icons";
import OneChart from "@/components/chart/OneChart";
import {data, option} from '@/data/chart'
import TwoChart from "@/components/chart/TwoChart";
import ThreeChart from "./components/chart/ThreeChart";
import FourChart from "./components/chart/FourChart";
import InfoItem from "./components/InfoItem";
import orders from '@/data/order'
import Order from "@/components/Order";
import platforms from '@/data/platform'
import Platform from "@/components/Platform";
import DocumentDownloadIcon from "./components/icons/DocumentDownloadIcon";

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const items = [
  {
    icon: <BoxTickIcon />,
    chart: <OneChart />,
    label: 'Total Order',
    labelno: '350',
    trendstatus: true
  },
  {
    icon: <RotateIcon />,
    chart: <TwoChart />,
    label: 'Total Refund',
    labelno: '270',
    trendstatus: false
  },
  {
    icon: <ShoppingCartIcon />,
    chart: <ThreeChart />,
    label: 'Average Sales',
    labelno: '1567',
    trendstatus: false
  },
  {
    icon: <CoinIcon />,
    chart: <FourChart />,
    label: 'Total Income',
    labelno: '$350,000',
    trendstatus: true
  }
]

const Analytics = () => {

  return (
    <>
    <div className="lg:flex flex-col space-y-10 pb-10 hidden">
      <div className="lg:flex xs:flex-col md:flex lg:h-[370px] h-[300px] space-x-10">
      <div className="bg-white p-1 lg:p-14 lg:w-[63%] h-full rounded-[14px]">
        <div className="flex justify-between items-center font-plusSans ">
          <span className="font-semibold lg:text-[18px] text-sm">Sales Trend</span>
          <div className="flex space-x-5 items-center">
            <span className="font-medium ">Sort by: </span>
            <div className="lg:p-2 text-sm p-1 px-4 border flex items-center justify-center rounded-full">
              <span>Weekly</span>
              <KeyboardArrowDownOutlined />
            </div>
          </div>
        </div>
        <Bar data={data} options={option} />
      </div>
      <div className="lg:flex-1 h-full justify-end">
        <div className="grid lg:grid-cols-2 xs:grid-cols-2 gap-2 ">
          {
            items?.map(({icon, chart, label, labelno, trendstatus}) => (
                <InfoItem Icon={icon} Chart={chart} label={label} labelno={labelno} trendstatus={trendstatus}/>
            ))
            }
        </div>
      </div>
      </div>
       <div className="lg:flex xs:flex-col flex h-[350px] space-x-10">
      <div className="bg-white p-8 w-[63%] h-full rounded-[14px] overflow-hidden">
        <div className="flex justify-between items-center font-plusSans ">
          <span className="font-semibold text-[18px]">Last Order</span>
          <div className="flex space-x-5 items-center">
            <span className="font-medium text-lg text-[#34CAA5]">See All</span>
          </div>
        </div> 
        <div className="flex flex-col space-y-5 font-medium pt-6 ">
          <div className="flex justify-between  items-center text-[#9CA4AB] text-xl font-medium">
            <span className="w-[200px] flex justify-start">Name</span>
            <span className="w-[150px] flex justify-start">Date</span>
            <span className="w-[100px] flex justify-start">Amount</span>
            <span className="w-[100px] flex justify-start">Status</span>
            <span className="w-[100px] flex justify-start">Invoice</span>
          </div>
          {
            orders?.map(({name, date, amount, url, status}) => (
              <Order name={name} date={date} amount={amount} url={url} status={status}/>
            ))
          }
        </div>
      </div>
        <div className="flex-1 p-8 rounded-xl bg-white font-plusSans overflow-hidden">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Top Platform</span>
              <span className="font-medium text-lg text-[#34CAA5]">See All</span>
          </div>
          <div className="">
            {platforms?.map(({name, color, amount, percent, progress}) => (
                <Platform bgColor={color} name={name} percent={percent} amount={amount} progress={progress}/>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="xs:flex lg:hidden flex flex-col space-y-12 py-5">
      <div className="bg-white p-3 py-8 lg:p-14 lg:w-[63%] h-[400px] rounded-[14px]">
        <div className="flex justify-between items-center font-plusSans ">
          <span className="font-semibold lg:text-[18px] text-sm">Sales Trend</span>
          <div className="flex space-x-5 items-center">
            <span className="font-medium ">Sort by: </span>
            <div className="lg:p-2 text-sm p-1 px-4 border flex items-center justify-center rounded-full">
              <span>Weekly</span>
              <KeyboardArrowDownOutlined />
            </div>
          </div>
        </div>
        <Bar data={data} options={option} />
      </div>
      <div className="grid lg:grid-cols-2 xs:grid-cols-2 gap-2 ">
          {
            items?.map(({icon, chart, label, labelno, trendstatus}) => (
                <InfoItem Icon={icon} Chart={chart} label={label} labelno={labelno} trendstatus={trendstatus}/>
            ))
            }
        </div>
        <div className="bg-white p-8 w-full h-full rounded-[14px] overflow-hidden">
        <div className="flex justify-between items-center font-plusSans ">
          <span className="font-semibold text-[18px]">Last Order</span>
          <div className="flex space-x-5 items-center">
            <span className="font-medium text-lg text-[#34CAA5]">See All</span>
          </div>
        </div> 
        <div className="flex flex-col space-y-3 font-medium pt-6 ">
          <div className="flex justify-between  items-center text-[#9CA4AB] text-xs font-medium">
            <span className="w-[100px] flex justify-start">Name</span>
            <span className="w-[100px] flex justify-start">Date</span>xs
            <span className="w-[150px] flex justify-start">Amount</span>
            <span className="w-[120px] flex justify-start">Status</span>
            <span className="w-[100px] flex justify-start">Invoice</span>
          </div>
          {
            orders?.map(({name, date, amount, status}) => (
              <div className="flex justify-between items-center lg:text-lg font-plusSans font-medium border-t pt-5">
            <div className="w-[100px] flex justify-start space-x-3 items-center">
              <span className="flex text-[9px]">{name}</span>
            </div>
            <span className="w-[100px] flex justify-start text-[#737373] text-xs">{date}</span>
            <span className="w-[150px] flex justify-start text-xs">${amount}</span>
            <span className={`w-[100px] flex justify-start font-normal ${ status ? "text-[#34CAA5]": "text-[#ED544E]"}  text-xs`}>
              {status ? 'Paid' : 'Refund'}
            </span>
            <div className="w-[100px] flex justify-start items-center space-x-2">
              <DocumentDownloadIcon />
              <span className="text-sm">View</span>
            </div>
          </div>
            ))
          }
        </div>
      </div>
      <div className="flex-1 p-8 rounded-xl bg-white font-plusSans overflow-hidden">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Top Platform</span>
              <span className="font-medium text-lg text-[#34CAA5]">See All</span>
          </div>
          <div className="">
            {platforms?.map(({name, color, amount, percent, progress}) => (
                <Platform bgColor={color} name={name} percent={percent} amount={amount} progress={progress}/>
            ))}
          </div>
        </div>
    </div>
    </>
  )
}

export default Analytics