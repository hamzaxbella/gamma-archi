import { InputProps } from "@/lib/interfaces";
import Image from "next/image";

const Input = ({ label, ico, textarea, type, handleChange, value, name }: InputProps) => {
  return (
    <div className="relative flex-1 w-full flex items-center justify-between">
      {textarea ? (
        <textarea
          name={name} // Pass the name prop
          placeholder={label}
          value={value}
          onChange={handleChange}
          className="flex-1 placeholder:text-xl placeholder:capitalize placeholder:font-thin placeholder:text-white placeholder:text-left bg-transparent ring-1 ring-white ring-opacity-45 rounded-3xl min-h-[300px] outline-none focus:ring-secondary py-4 px-5"
        />
      ) : (
        <input
          name={name} // Pass the name prop
          onChange={handleChange}
          value={value}
          placeholder={label}
          className="flex-1 placeholder:text-xl placeholder:capitalize placeholder:font-thin placeholder:text-white bg-transparent ring-1 ring-white ring-opacity-45 rounded-full outline-none focus:ring-secondary py-4 px-5"
          type={type ? type : "text"}
        />
      )}
      {ico && <Image className="absolute right-4 top-1/2 -translate-y-1/2 " src={ico} alt={label} width={25} height={25} />}
    </div>
  );
};


export default Input
