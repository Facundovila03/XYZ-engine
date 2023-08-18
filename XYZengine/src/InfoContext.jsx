/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";

const infoContext = React.createContext();
const infoChange = React.createContext();

export function useInfo() {
  return useContext(infoContext);
}

export function useInfoChange() {
  return useContext(infoChange);
}

export function InfoProvider({ children }) {
  const [info, setInfo] = useState({
    projectName: "",
    projectDescription: "",
    clientName: "",
    contractor: "",
  });

  const handleInfoChange = (e) => {
    e.preventDefault();
    console.log("hola");
    let property = e.target.name;
    let value = e.target.value;
    setInfo({ ...info, [property]: value });
  };

  return (
    <infoContext.Provider value={info}>
      <infoChange.Provider value={handleInfoChange}>
        {children}
      </infoChange.Provider>
    </infoContext.Provider>
  );
}
