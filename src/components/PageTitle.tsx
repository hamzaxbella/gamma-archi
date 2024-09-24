import React from "react";
import { truncateText } from "@/lib/utils";

interface PageTitleProps {
  title: string;
  maxCharacter?: boolean;
}

const PageTitle = ({ title, maxCharacter }: PageTitleProps) => {
  return (
    <div className="flex items-center gap-6  lg:mt-24">
      <h1
        className={` text-4xl lg:text-6xl font-semibold tracking-widest lg:whitespace-nowrap uppercase`}
        title={title}
      >
        {maxCharacter ? truncateText(title, 20) : title}
      </h1>
      <div className="w-full h-px bg-white" />
    </div>
  );
};

export default PageTitle;
