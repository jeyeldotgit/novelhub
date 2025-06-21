import ReadNav from "@/components/ReadView/ReadNav";
import React from "react";

const ReadNavLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <ReadNav />
      <main>{children}</main>
    </>
  );
};

export default ReadNavLayout;
