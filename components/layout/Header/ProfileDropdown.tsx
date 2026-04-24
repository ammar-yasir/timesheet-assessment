"use client";
import MenuDropdown from "@/components/ui/MenuDropdown";
import { useSession, signOut } from "next-auth/react";

const ProfileDropdown = () => {
  const { data } = useSession();
  return (
    <MenuDropdown
      label={data?.user?.name || "John Doe"}
      menuIcon="chevron"
      actions={[
        {
          label: "Logout",
          onClick: () => {
            signOut({ callbackUrl: "/auth/login" });
          },
        },
      ]}
    />
  );
};

export default ProfileDropdown;