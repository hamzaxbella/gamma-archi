"use client";
import React, { useState, useRef } from "react";
import PageTitle from "./PageTitle";
import Input from "../components/Input";
import { email, location, money, phone } from "../../public/icons";
import emailjs from "@emailjs/browser";

const QuoteForm = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    services: {
      residentiel: {
        selected: false,
        authorization: ""
      },
      commercial: {
        selected: false,
        authorization: ""
      },
      renovation: {
        selected: false,
        authorization: ""
      },
      amenagementPaysager: {
        selected: false,
        authorization: ""
      },
      designInterieur: {
        selected: false,
        authorization: ""
      },
      industriel: {
        selected: false,
        authorization: ""
      },
      autre: {
        selected: false,
        authorization: ""
      }
    },
    location: "",
    projectSize: "",
    budget: "",
    dateOfStart: "",
    comments: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name.includes('service-')) {
      const service = name.split('-')[1];
      setFormData(prev => ({
        ...prev,
        services: {
          ...prev.services,
          [service]: {
            ...prev.services[service as keyof typeof prev.services],
            selected: (e.target as HTMLInputElement).checked
          }
        }
      }));
    } else if (name.includes('authorization-')) {
      const service = name.split('-')[1];
      setFormData(prev => ({
        ...prev,
        services: {
          ...prev.services,
          [service]: {
            ...prev.services[service as keyof typeof prev.services],
            authorization: value
          }
        }
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prepare services data for email template
    const selectedServices = Object.entries(formData.services)
      .filter(([_, value]) => value.selected)
      .map(([key, value]) => ({
        name: key === 'designInterieur' ? "Design d'intérieur" : 
              key === 'residentiel' ? "Résidentiel" :
              key === 'amenagementPaysager' ? "Aménagement Paysager" :
              key === 'industriel' ? "Industriel" :
              key === 'autre' ? "Autre" : key,
        authorization: value.authorization
      }));

    const servicesText = selectedServices
      .map(service => `${service.name}: ${service.authorization}`)
      .join('\n');

    if (form.current) {
      // Add a hidden input for services
      const servicesInput = document.createElement('input');
      servicesInput.type = 'hidden';
      servicesInput.name = 'services';
      servicesInput.value = servicesText;
      form.current.appendChild(servicesInput);

      try {
        const response = await emailjs.sendForm(
          "service_pcdufpl",
          "template_j4r7wwa",
          form.current,
          "tqwWb0TBJ_r5Y2cFV"
        );
        
        // Remove the temporary input
        form.current.removeChild(servicesInput);
        
        alert("Votre message a été envoyé!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          services: {
            residentiel: { selected: false, authorization: "" },
            commercial: { selected: false, authorization: "" },
            renovation: { selected: false, authorization: "" },
            amenagementPaysager: { selected: false, authorization: "" },
            designInterieur: { selected: false, authorization: "" },
            industriel: { selected: false, authorization: "" },
            autre: { selected: false, authorization: "" }
          },
          location: "",
          projectSize: "",
          budget: "",
          dateOfStart: "",
          comments: "",
        });
      } catch (error: unknown) {
        // Remove the temporary input in case of error
        form.current.removeChild(servicesInput);
        
        if (error instanceof Error) {
          alert(`Votre message n'a pas pu être envoyé: (${error.message})`);
        } else {
          alert("Votre message n'a pas pu être envoyé: (Unknown error)");
        }
      }
    }
  };

  const authorizationTypes = [
    "Demande d'autorisation de réfection",
    "Demande d'autorisation de construction",
    "Demande d'autorisation d'exploitation",
    "Devis estimatif"
  ];

  return (
    <section className="max-container">
      <PageTitle title="Demander une consultation." />
      <p className="padding-x lg:px-0 text-xl my-6 font-thin leading-8 tracking-wider">
        Remplissez le formulaire ci-dessous pour obtenir une consultation gratuite
        pour votre projet. Nous vous contacterons dans les plus brefs délais.
      </p>
      <form
        onSubmit={handleSubmit}
        ref={form}
        action=""
        className="padding-x lg:px-0 flex flex-col gap-6 py-24"
      >
        <div className="flex flex-col lg:flex-row gap-6">
          <Input
            label="Nom..."
            name="name"
            handleChange={handleChange}
            value={formData.name}
          />
          <Input
            label="Numéro de téléphone..."
            name="phone"
            handleChange={handleChange}
            value={formData.phone}
            type="number"
            ico={phone}
          />
        </div>
        <div>
          <Input
            label="email..."
            name="email"
            value={formData.email}
            handleChange={handleChange}
            type="email"
            ico={email}
          />
        </div>
        <div>
          <h3 className="text-2xl mb-6">Type de projet : </h3>
          <div className="grid grid-cols-1  gap-6">
            {Object.entries(formData.services).map(([key, value]) => (
              <div key={key} className="relative bg-black/20 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-black/30">
                <label className="flex flex-col gap-4 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      name={`service-${key}`}
                      checked={value.selected}
                      onChange={handleChange}
                      className="w-5 h-5 accent-white"
                    />
                    <span className="text-xl font-thin tracking-wider capitalize">
                      {key === 'designInterieur' ? "Design d'intérieur" : 
                       key === 'residentiel' ? "Résidentiel" :
                       key === 'amenagementPaysager' ? "Aménagement Paysager" :
                       key === 'industriel' ? "Industriel" :
                       key === 'autre' ? "Autre" : key}
                    </span>
                  </div>
                  
                  {value.selected && (
                    <select 
                      name={`authorization-${key}`}
                      value={value.authorization}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 text-sm outline-none focus:border-white transition-all duration-300"
                    >
                      <option value="" className="text-black">Type d'autorisation</option>
                      {authorizationTypes.map((type, index) => (
                        <option key={index} className="text-black" value={type}>{type}</option>
                      ))}
                    </select>
                  )}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <Input
            handleChange={handleChange}
            value={formData.location}
            name="location"
            label="emplacement..."
            ico={location}
          />
          <Input
            handleChange={handleChange}
            value={formData.projectSize}
            name="projectSize"
            label="Surface km²..."
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <Input
            handleChange={handleChange}
            value={formData.budget}
            name="budget"
            label="Plage budgétaire en DH..."
            type="number"
            ico={money}
          />
          <Input
            handleChange={handleChange}
            value={formData.dateOfStart}
            name="dateOfStart"
            label="Date de début souhaitée..."
            type="date"
          />
        </div>

        <div>
          <Input
            handleChange={handleChange}
            value={formData.comments}
            name="comments"
            label="Commentaires ou demandes spéciales..."
            textarea
          />
        </div>
        <button
          type="submit"
          className="py-3 text-xl font-thin tracking-wider hover:bg-white hover:text-thirdly w-fit rounded-full px-12 ring-2 ring-white bg-transparent outline-none"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default QuoteForm;
