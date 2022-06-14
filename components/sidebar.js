import React from "react";
import { useEffect, useState } from "react";
import  { default as data }  from "../pages/content.json";

export function Sidebar({ handleClick }) {
  const [themen, setThemen] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    setThemen(Object.keys(data.collection));
  }, []);

  const changeThema = (index) => {
    console.log(index)
    handleClick(themen[index]);
    setActive(index);
  };

  return (
    <div className="border-r p-8 pr-24">
      <div className="text-sm font-medium">Word</div>
      {themen.map((number, index) => (
        <div
          className={
            active === index
              ? "-ml-8 -mr-24 bg-black py-3 px-8 font-medium text-white"
              : "py-3"
          }
          onClick={()=>changeThema(index)}
          key={index}
        >
          {number}
        </div>
      ))}
      <div className="py-3">Flyer</div>
      <div className="py-3">Projekt</div>
      <div className="py-3 pb-8">Artikel</div>
      <div className="border-t pt-8 text-sm font-medium">Excel</div>
      <div className="py-3">Grundlagen</div>
      <div className="py-3">Diagramm</div>
      <div className="py-3">Auswertung</div>
      <div className="py-3 pb-8">Umfrage</div>
      <div className="border-t pt-8 text-sm font-medium">Powerpoint</div>
      <div className="py-3">Elternabend</div>
      <div className="py-3">Projekt</div>
      <div className="py-3">Umfrage</div>
    </div>
  );
}
