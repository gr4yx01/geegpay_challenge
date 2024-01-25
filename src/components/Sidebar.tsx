import { ArrowRightIcon, BoxIcon, BrightIcon, CategoryIcon, DiscountIcon, InfoCircleIcon, LogoIcon, LogoutIcon, MoonIcon, ProfileIcon, SettingsIcon, TrendupIcon } from "@/components/icons"

const Sidebar = () => {
  return (
    <div className="p-3 bg-primary flex flex-col justify-between py-8 border">
      <div className="flex flex-col space-y-6 items-center justify-center">
        <LogoIcon />
        <CategoryIcon />
        <TrendupIcon />
        <ProfileIcon />
        <BoxIcon />
        <DiscountIcon />
        <InfoCircleIcon />
        <div className="flex flex-col items-center justify-center bg-white p-3 gap-5 rounded-full">
          <button className="bg-primary-green flex justify-center items-center rounded-full w-8 h-8">
            <BrightIcon />
          </button>
          <button>
            <MoonIcon />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-5">
        <ArrowRightIcon />
        <SettingsIcon />
        <LogoutIcon />
      </div>

    </div>
  )
}

export default Sidebar