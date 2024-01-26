import { Box, LinearProgress } from "@mui/material"

interface PlatformProps {
  bgColor: string;
  progress: number;
  name: string;
  amount: string;
  percent: number;
}

const Platform = ({bgColor, progress, name, amount, percent}: PlatformProps) => {
  return (
    <div className="flex flex-col pt-5 space-y-4 ">
              <span className="text-lg font-semibold">{name}</span>
              <Box sw={{flexGrow: 1}}>
                <LinearProgress
                  variant="determinate"
                  value={progress}
                  sx={{
                    backgroundColor: `#E4E4E4`,
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: bgColor,
                      borderRadius: 100
                    },
                    height: 10,
                    borderRadius: 100
                }}
              />
              </Box>
              <div className="flex justify-between items-center text-[#525252] text-lg font-plusSans">
                <span>${amount}</span>
                <span>+{percent}%</span>
              </div>
            </div>
  )
}

export default Platform