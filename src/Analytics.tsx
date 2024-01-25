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
    <div className="flex flex-col space-y-10 pb-10">
      <div className="flex h-[500px] space-x-10">
      <div className="bg-white p-14 w-[60%] h-full rounded-[14px]">
        <div className="flex justify-between items-center font-plusSans ">
          <span className="font-semibold text-[18px]">Sales Trend</span>
          <div className="flex space-x-5 items-center">
            <span className="font-medium text-sm">Sort by: </span>
            <div className="p-2 px-4 border flex items-center justify-center rounded-full">
              <span>Weekly</span>
              <KeyboardArrowDownOutlined />
            </div>
          </div>
        </div>
        <Bar data={data} options={option} />
      </div>
        <div className="grid grid-cols-2 gap-5 w-[40%]">
          {
            items?.map(({icon, chart, label, labelno, trendstatus}) => (
                <InfoItem Icon={icon} Chart={chart} label={label} labelno={labelno} trendstatus={trendstatus}/>
            ))
            }
        </div>
      </div>
       <div className="flex h-[500px] space-x-10">
      <div className="bg-white p-8 w-[60%] h-full rounded-[14px] overflow-hidden">
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
        <div className="flex-1 p-8 rounded-xl bg-white">
          <div className=" w-full space-y-8">
            <div className="flex justify-between items-center">
              <span>Top Platform</span>
              <span className="font-medium text-lg text-[#34CAA5]">See All</span>
            </div>
          </div>
          <div>
            
          </div>
        </div>
      </div>

    </div>
  )
}

export default Analytics