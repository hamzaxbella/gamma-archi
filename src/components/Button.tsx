import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ButtonProps {
  label: string;
  src?: string;
  primary: boolean;
  path: string;
}

const Button = ({ label, src, primary, path }: ButtonProps) => {
  return (
      <button
        className={
            primary
            ? "bg-secondary hover:bg-thirdly   duration-300 text-lg font-extralight py-4  px-2 my-4 "
            : ""
        }
      >
            <Link href={`${path}`} className=" flex gap-2 hover:gap-4 transition-all">
        <span>{label}</span>
        <p>&#8599;</p>
    </Link>
      </button>
  );
};

export default Button;
