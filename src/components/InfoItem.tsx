import { ReactNode } from "preact/compat";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

interface InfoItemProps {
  Icon: ReactNode;
  Chart: ReactNode;
  trendstatus: boolean;
  label: string;
  labelno: string;
}


const InfoItem = ({Icon, Chart, trendstatus, label, labelno}: InfoItemProps) => {
  return (
      <div className="p-4 rounded-xl h-[180px] bg-white space-y-2 shadow-sm">
            <div className=" flex justify-between">
              <div className="p-2 border rounded-full w-10 h-10 flex items-center justify-center">
                {Icon}
              </div>
                <div className="pl-4">
                  {Chart}
                </div> 
            </div>
            <div className="flex flex-col  font-plusSans space-y-1">
              <span className="text-lg font-medium text-[#898989]">{label}</span>
              <span className="text-2xl font-semibold">{labelno}</span>
            </div>
            <div className="flex items-center justify-between space-x-2">
              <div className="text-[#34CAA5] p-1 px-3 pt flex items-center justify-center space-x-1 bg-[#34CAA5] rounded-full bg-opacity-20 text-opacity-100 text-xs">

                {trendstatus ? <TrendingUpIcon /> : <TrendingDownIcon />}
                <span className="font-medium   font-plusSans">23.5%</span>
              </div>
                {/* <div className="">
                  <span className="text-xs text-[#606060]">vs previous month</span>
                </div> */}
            </div>
          </div>
  )
}

export default InfoItem