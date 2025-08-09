import Imoge1 from "../assets/61jjsEvw1oL._AC_SL1200_.jpg";
import Imoge2 from "../assets/81N2cRfcgkL._AC_UL1500_.jpg";
import Imoge3 from "../assets/949-3.jpg";
import "./cagegor.css";
import { useState } from "react";

const categor = [
  {
    tital: "TV",
    imageUrl: Imoge1,
  },
  {
    tital: "Elateric",
    imageUrl: Imoge2,
  },
  {
    tital: "Rebots",
    imageUrl: Imoge3,
  },
];
const Categorsection = () => {
  const [paused, setPaused] = useState(false);

  return (
    <div className="catgorImoge-All">
      {categor.map((categor, index) => (
        <div key={index} className="catecgor-tree-imoge">
          <img
            className={`clock-animation ${paused ? "paused" : ""}`}
            onClick={() => setPaused(!paused)}
            style={{ width: "200px", cursor: "pointer" }}
            src={categor.imageUrl}
            alt="clock"
          />
          <div className="catogor-text-iomge"></div>
        </div>
      ))}
    </div>
  );
};

export default Categorsection;
