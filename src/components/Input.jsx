// @ts-ignore
import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Input = () => {
  const [postCode, setPostcode] = useState(
    localStorage.getItem("postcode") ?? ""
  );
  const [litre, setLitre] = useState(localStorage.getItem("litre") ?? "");
  const [households, setHouseholds] = useState(
    localStorage.getItem("households") ?? ""
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateInputsPassed()) {
      localStorage.setItem("postcode", postCode.toString());
      localStorage.setItem("litre", litre.toString());
      localStorage.setItem("households", households.toString());
      setIsValid(true);
    }
  };

  const validateInputsPassed = () => {
    //errormessage bearbeiten <label className='errorLabel'>{userNameError}</label>
    if (postCode.length !== 5) {
      setErrorMessage("Die Postleitzahl ist nicht gültig.");
      return false;
    }
    if (postCode < 1067 && postCode > 99998) {
      setErrorMessage("Die Postleitzahl ist nicht gültig.");
      return false;
    }
    if (litre < 0) {
      setErrorMessage("Bitte geben Sie eine gültige Menge an.");
      return false;
    }
    if (households < 0) {
      setErrorMessage("Bitte geben Sie eine gültige Menge an.");
      return false;
    } else {
      return true;
    }
  };
  useEffect(() => {
    if (validateInputsPassed()) {
      setIsValid(true);
    }
  }, []);

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <nput
          type="number"
          className="input"
          placeholder="Postleitzahl"
          value={postCode}
          onChange={(e) => setPostcode(e.target.value)}
        />
        <input
          type="number"
          className="input"
          placeholder="Menge in Liter"
          value={litre}
          onChange={(e) => setLitre(e.target.value)}
        />
        <input
          type="number"
          className="input"
          placeholder="Haushalte"
          value={households}
          onChange={(e) => setHouseholds(e.target.value)}
        />
        <input type="submit" />
      </form>
      {isValid && (
        <Cards postCode={postCode} litre={litre} households={households} />
      )}
    </>
  );
};

export default Input;
