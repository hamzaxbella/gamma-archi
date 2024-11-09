import React from "react";
import Link from "next/link";

interface ButtonProps {
  label: string;
  primary: boolean;
  path: string;
}

const Button = ({ label, primary, path  }: ButtonProps) => {
  return (
      <button
      data-button
        className={
            primary
            ? "bg-secondary hover:bg-thirdly   duration-300 text-lg font-extralight py-4  px-2 my-4 "
            : ""
        }
      >
            <Link href={`${path}`} className=" flex gap-2 ">
        <span>{label}</span>
        <p>&#8599;</p>
    </Link>
      </button>
  );
};

export default Button;
