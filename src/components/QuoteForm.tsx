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
    projectType: "",
    location: "",
    projectSize: "",
    budget: "",
    dateOfStart: "",
    comments: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      try {
        const response = await emailjs.sendForm(
          "service_pcdufpl",
          "template_j4r7wwa",
          form.current,
          "tqwWb0TBJ_r5Y2cFV"
        );
        alert("Votre message a été envoyé!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          projectType: "",
          location: "",
          projectSize: "",
          budget: "",
          dateOfStart: "",
          comments: "",
        }); // Clear form
      } catch (error: unknown) {
        if (error instanceof Error) {
          alert(`Votre message n'a pas pu être envoyé: (${error.message})`);
        } else {
          alert("Votre message n'a pas pu être envoyé: (Unknown error)");
        }
      }
    }
  };

  return (
    <section className=" max-container">
      <PageTitle title="Demander un devis." />
      <p className="padding-x lg:px-0 text-xl my-6 font-thin  leading-8 tracking-wider">
        Remplissez le formulaire ci-dessous pour obtenir un devis personnalisé
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
          <h3 className="text-2xl mb-4">Type de projet : </h3>
          <div>
            <div className="custom-radio">
              <label
                htmlFor="résidentiel"
                className="flex gap-6 text-xl font-thin tracking-wider"
              >
                <input
                  type="radio"
                  name="projectType"
                  value="Résidentiel"
                  onChange={handleChange}
                  id="résidentiel"
                  required
                />
                <span></span>
                <p>Résidentiel</p>
              </label>
            </div>

            <div className="custom-radio">
              <label
                htmlFor="commercial"
                className="flex gap-6 text-xl font-thin tracking-wider"
              >
                <input
                  type="radio"
                  name="projectType"
                  value="Commercial"
                  onChange={handleChange}
                  id="commercial"
                />
                <span></span>
                <p>Commercial</p>
              </label>
            </div>

            <div className="custom-radio">
              <label
                htmlFor="renovation"
                className="flex gap-6 text-xl font-thin tracking-wider"
              >
                <input
                  type="radio"
                  name="projectType"
                  value="Rénovation"
                  onChange={handleChange}
                  id="renovation"
                />
                <span></span>
                <p>Rénovation</p>
              </label>
            </div>

            <div className="custom-radio">
              <label
                htmlFor="paysager"
                className="flex gap-6 text-xl font-thin tracking-wider"
              >
                <input
                  type="radio"
                  name="projectType"
                  value="Paysager"
                  onChange={handleChange}
                  id="paysager"
                />
                <span></span>
                <p>Paysager</p>
              </label>
            </div>

            <div className="custom-radio">
              <label
                htmlFor="design-interieur"
                className="flex gap-6 text-xl font-thin tracking-wider-6"
              >
                <input
                  type="radio"
                  name="projectType"
                  value="Design d'intérieur"
                  onChange={handleChange}
                  id="design-interieur"
                />
                <span></span>
                <p>Design d'intérieur</p>
              </label>
            </div>

            <div className="custom-radio">
              <label
                htmlFor="institutionnel"
                className="flex gap-6 text-xl font-thin tracking-wider"
              >
                <input
                  type="radio"
                  name="projectType"
                  value="Institutionnel"
                  onChange={handleChange}
                  id="institutionnel"
                />
                <span></span>
                <p>Institutionnel</p>
              </label>
            </div>

            <div className="custom-radio">
              <label
                htmlFor="industriel"
                className="flex gap-6 text-xl font-thin tracking-wider"
              >
                <input
                  type="radio"
                  name="projectType"
                  value="Industriel"
                  onChange={handleChange}
                  id="industriel"
                />
                <span></span>
                <p>Industriel</p>
              </label>
            </div>

            <div className="custom-radio">
              <label
                htmlFor="autre"
                className="flex gap-6 text-xl font-thin tracking-wider"
              >
                <input
                  type="radio"
                  name="projectType"
                  value="Autre"
                  onChange={handleChange}
                  id="autre"
                />
                <span></span>
                <p>Autre</p>
              </label>
            </div>
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
            label="taille/Portée du projet"
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
