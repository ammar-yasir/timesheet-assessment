import Link from "next/link";
import ProfileDropdown from "./ProfileDropdown";

const Header = () => {
  return (
    <header className="bg-white h-17 p-4">
      <div className="flex justify-between items-center h-full">
        <div className="flex items-center gap-8">
          <h3 className="font-medium text-2xl tracking-normal leading-normal align-middle">
            ticktock
          </h3>
          <Link href="/app/dashboard">
            <h6 className="text-sm text-gray-900 font-medium leading-normal tracking-normal align-middle">
              Timesheets
            </h6>
          </Link>
        </div>

        <ProfileDropdown />
      </div>
    </header>
  );
};

export default Header;
