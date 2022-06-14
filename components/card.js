import React, { useState } from "react";

export function Card(props) {
  console.log(props)
  const [showInfo, setShowInfo] = useState(true);

  const toggleContent = () => {
    setShowInfo(!showInfo);
  };

  const Info = ({}) => {
    return (
      <div className="px-8">
        <div className="pb-4">
          {props.info}
        </div>
        <div className="border-t py-4 text-gray-300">Kapitel</div>
        <div className="flex gap-4 font-mono">

          
          <div>01:23</div>
          <div>Was sind Formatvorlagen</div>
        </div>
        <div className="flex gap-4 py-4 font-mono">
          <div>02:48</div>
          <div>Formatvorlagen anwenden</div>
        </div>
        <div className="flex gap-4 font-mono">
          <div>03:01</div>
          <div>Formatvorlagen anpassen</div>
        </div>
        <div className="flex gap-4 py-4 font-mono">
          <div>03:23</div>
          <div>Formatvorlagen erstellen</div>
        </div>
      </div>
    );
  };

  const Aufgabe = () => {
    return (
      <>
        <div className="px-8">
          <div className="pb-4">
            Ein Projektantrag wird erstellt und als Brief an die
            Forschungsanstallt verschickt um weitere GElder zu erhalten.
            Deswegen werden nicht nur ein offizieller Birf, mit einem anhang der
            Projecktskizze verschickt.
          </div>
          <div className="border-t py-4 text-gray-300">Dateien</div>
          <div> - Aufgabenstellung als PDF</div>
          <div> - Bewertungskriterien</div>
        </div>
      </>
    );
  };

  return (
    <div className="m-8 w-1/4 rounded-2xl bg-white">
      <div className="flex p-8">
        <div
          className={`text-xl font-medium ${
            showInfo ? "text-black" : "text-gray-300"
          }`}
          onClick={toggleContent}
        >
          Info
        </div>
        <div
          className={`px-4 text-xl font-medium ${
            !showInfo ? "text-black" : "text-gray-300"
          }`}
          onClick={toggleContent}
        >
          Aufgabe
        </div>
      </div>
      {showInfo ? <Info /> : <Aufgabe />}
    </div>
  );
}
