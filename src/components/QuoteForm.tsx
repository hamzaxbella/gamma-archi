import React from "react";
import PageTitle from "./PageTitle";
import Input from "./Input";
import { calendar, email, location, money, phone } from "../../public/icons";

const QuoteForm = () => {
  return (
    <section className="padding-x lg:px-0 max-container">
      <PageTitle title="Demander un devis." />
      <p className="text-xl mb-12 font-thin  leading-8 tracking-wider">
        Remplissez le formulaire ci-dessous pour obtenir un devis personnalisé
        pour votre projet. Nous vous contacterons dans les plus brefs délais.
      </p>
      <form action="" className="flex flex-col gap-6 py-24">
        <div className="flex gap-6">
          <Input label="Nom..." />
          <Input label="Numéro de téléphone..." ico={phone} />
        </div>
        <div>
          <Input label="email..." ico={email} />
        </div>
        <div>
          <h3>Type de projet : </h3>
          <div>
            <div className="custom-radio">
              <label
                htmlFor="résidentiel"
                className="flex gap-6 text-xl font-thin tracking-wider"
              >
                <input
                  type="radio"
                  name="stuff"
                  value="Résidentiel"
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
                  name="stuff"
                  value="Commercial"
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
                  name="stuff"
                  value="Rénovation"
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
                  name="stuff"
                  value="Paysager"
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
                  name="stuff"
                  value="Design d'intérieur"
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
                  name="stuff"
                  value="Institutionnel"
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
                  name="stuff"
                  value="Industriel"
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
                <input type="radio" name="stuff" value="Autre" id="autre" />
                <span></span>
                <p>Autre</p>
              </label>
            </div>
          </div>
        </div>
        <div className="flex gap-6">
          <Input label="emplacement..." ico={location} />
          <Input label="taille/Portée du projet" />
        </div>

        <div className="flex gap-6">
          <Input label="Plage budgétair..." ico={money} />
          <Input label="Date de début souhaitée..." ico={calendar}  />
        </div>
        <div>
          <Input label="Commentaires ou demandes spéciales..." textarea/>
        </div>
      </form>
    </section>
  );
};

export default QuoteForm;
