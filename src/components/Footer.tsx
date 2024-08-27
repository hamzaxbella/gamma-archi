import { socialLinks } from "@/constants";
import Image from "next/image";
import React from "react";
import { top_arrow } from "../../public/icons";

const Footer = () => {
  return (
    <footer className="bg-thirdly  overflow-hidden relative  h-[100vh] md:h-[110vh] lg:h-[80vh]"       style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}    >
      <div className="fixed -bottom-10 lg:-bottom-20 lg:left-0 h-[100vh] md:h-[110vh] lg:h-[80vh] w-full padding-x">
      <div id="container" className=" w-full flex flex-col lg:flex-row gap-16 padding-y">
        <div className="flex-1">
          <form action="" className="w-full flex flex-col gap-4">
            <input type="text" placeholder="name..." className="input-styling"/>
            <div className="flex flex-col gap-4 lg:flex-row ">
              <input type="text" placeholder="email..." className="input-styling"/>
              <input type="text" placeholder="phone..." className="input-styling"/>
            </div>
            <textarea placeholder="message..." className="input-styling pt-2 !h-24" name="" id=""></textarea>
            <button type="submit" className=" self-start capitalize font-thin text-secondary underline text-2xl">Envoyer</button>
          </form>
        </div>
        <div className="flex-1">
          <a className="text-2xl lg:text-3xl break-all font-regular text-secondary underline" href="mailto:karaayaarchitecture@gmail.com?subject:Contact_from_your_website">
            karaayaarchitecture@gmail.com
          </a>
          <ul className="mt-6">
            {socialLinks.map((link, index) => (
              <div key={index} className="flex gap-2 hover:gap-4 transition-all duration-200 items-center">
                <a href={link.path} className="text-lg uppercase font-semibold text-secondary">{link.label}</a>
                <Image src={top_arrow} alt="link" width={15} height={25} />
              </div>
            ))}
          </ul>
          <div className="mt-6 flex items-end">
            <div className="flex-1">
              <span className="text-sm text-secondary font-thin">made with 🤍 by </span>
              <h3 className="font-bold capitalize text-secondary text-2xl">
                <a href="">zyllux digital</a>
              </h3>
            </div>
            <a className="font-light text-lg uppercase text-secondary" href="#">Retour en haut</a>
          </div>
        </div>
      </div>
      <p className="text-center py-6 text-xl font-normal text-secondary">
        © {new Date().getFullYear()} Kara Aya Architecture. Tous droits
        réservés.
      </p>
      </div>
    </footer>
  );
};

export default Footer;
