'use client';
import { socialLinks } from "@/constants";
import Image from "next/image";
import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { top_arrow } from "../../public/icons";

const Footer: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', 
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (form.current) {
      try {
        const response = await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
        );
        console.log('Email sent successfully:', response);
        alert('Votre message a été envoyé!');
        setFormData({ name: '', email: '', phone: '', message: '' }); // Clear form
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error('Email sending failed:', error.message);
          alert(`Votre message n'a pas pu être envoyé: (${error.message})`);
        } else {
          console.error('Email sending failed: Unknown error', error);
          alert("Votre message n'a pas pu être envoyé: (Unknown error)");
        }
      }
    }
  };
  
  
  return (
    <footer className="bg-thirdly overflow-hidden relative h-[100vh] md:h-[110vh] lg:h-[80vh]" style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
      <div className="fixed -bottom-10 lg:-bottom-20 lg:left-0 h-[100vh] md:h-[110vh] lg:h-[80vh] w-full padding-x">
        <div id="container" className="w-full flex flex-col lg:flex-row gap-16 padding-y max-container">
          <div className="flex-1">
            <form ref={form} onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
              <input
                type="text"
                placeholder="name..."
                name="name" // Add name attribute
                value={formData.name}
                onChange={handleChange}
                className="input-styling"
                required
              />
              <div className="flex flex-col gap-4 lg:flex-row">
                <input
                  type="email"
                  placeholder="email..."
                  name="email" // Add name attribute
                  value={formData.email}
                  onChange={handleChange}
                  className="input-styling"
                  required
                />
                <input
                  type="text"
                  placeholder="phone..."
                  name="phone" // Add name attribute
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-styling"
                />
              </div>
              <textarea
                placeholder="message..."
                name="message" // Add name attribute
                value={formData.message}
                onChange={handleChange}
                className="input-styling pt-2 !h-24"
                required
              />
              <button type="submit" className="self-start capitalize font-thin text-secondary underline text-2xl">Envoyer</button>
            </form>
          </div>
          <div className="flex-1">
            <a className="text-2xl lg:text-3xl break-all font-regular text-secondary underline" href="mailto:zyllux.agency@gmail.com?subject:Contact_from_your_website">
              zyllux.agency@gmail.com
            </a>
            <ul className="mt-6">
              {socialLinks.map((link, index) => (
                <div key={index} className="flex gap-2 hover:gap-4 transition-all duration-200 items-center">
                  <a href={link.path} target="_blank" className="text-lg uppercase font-semibold text-secondary">{link.label}</a>
                  <Image src={top_arrow} alt="link" width={15} height={25} />
                </div>
              ))}
            </ul>
            <div className="mt-6 flex items-end">
              <div className="flex-1">
                <span className="text-sm text-secondary font-thin">made with 🤍 by </span>
                <h3 className="font-bold capitalize text-secondary text-2xl">
                  <a href="https://www.instagram.com/zyllux_digital/" target="_blank">zyllux digital</a>
                </h3>
              </div>
              <a className="font-light text-lg uppercase text-secondary" href="#">Retour en haut</a>
            </div>
          </div>
        </div>
        <p className="text-center py-6 text-xl font-normal text-secondary">
          © {new Date().getFullYear()} zyllux digital. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
