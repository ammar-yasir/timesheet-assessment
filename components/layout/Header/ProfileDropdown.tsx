"use client";
import MenuDropdown from "@/components/ui/MenuDropdown";

const ProfileDropdown = ({ userName = "John Doe" }: { userName: string }) => {
  return (
    <MenuDropdown
      label={userName}
      menuIcon="chevron"
      actions={[
        {
          label: "Logout",
          onClick: () => {
            console.log("Logout");
          },
        },
      ]}
    />
  );
};

export default ProfileDropdown;