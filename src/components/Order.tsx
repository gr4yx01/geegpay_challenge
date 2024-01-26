import DocumentDownloadIcon from "./icons/DocumentDownloadIcon"

interface OrderProps {
  name: string;
  date: string;
  amount: string;
  status: boolean;
  url: string;
}


const Order = ({name, date, url, amount, status}: OrderProps) => {
  return (
     <div className="flex justify-between items-center text-xs lg:text-lg font-plusSans font-medium border-t pt-5">
            <div className="w-[200px] flex justify-start space-x-3 items-center">
                  <img src={url} alt="" className="w-10 h-10 object-cover rounded-full xs:hidden lg:flex hidden"/>
              <span className="flex ">{name}</span>
            </div>
            <span className="w-[150px] flex justify-start text-[#737373]">{date}</span>
            <span className="w-[100px] flex justify-start">${amount}</span>
            <span className={`w-[100px] flex justify-start font-normal ${ status ? "text-[#34CAA5]": "text-[#ED544E]"} ]`}>
              {status ? 'Paid' : 'Refund'}
            </span>
            <div className="w-[100px] flex justify-start items-center space-x-2">
              <DocumentDownloadIcon />
              <span className="text-[16px]">View</span>
            </div>
          </div>
  )
}

export default Order