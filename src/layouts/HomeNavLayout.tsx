import HomeNav from "@/components/homepage/HomeNav";
import React from "react";

const HomeNavLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <HomeNav />
      <main>{children}</main>
    </>
  );
};

export default HomeNavLayout;
