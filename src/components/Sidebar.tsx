import { ArrowRightIcon, BoxIcon, BrightIcon, CategoryIcon, DiscountIcon, InfoCircleIcon, LogoIcon, LogoutIcon, MoonIcon, ProfileIcon, SettingsIcon, TrendupIcon } from "@/components/icons"

const Sidebar = () => {
  return (
    <div className="p-3 bg-primary lg:flex flex-col justify-between gap-10 border hidden">
      <div className="flex flex-col space-y-6 items-center justify-center text-xs">
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
      <div className="flex flex-col items-center justify-center space-y-8">
        <ArrowRightIcon />
        <SettingsIcon />
        <LogoutIcon />
      </div>

    </div>
  )
}

export default Sidebar