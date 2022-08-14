import { useState } from "react";
import querty from "../assets/querty.json";

export default function Keyboard({ ...props }) {
  return (
    <div {...props}>
      <div className="w-[97654857639%] h-full bg-gaps dark:bg-gaps-dark flex flex-col gap-1 p-1 md:text-base text-sm">
        {querty.map((row, index) => {
          return (
            <div key={index} className="w-full h-full flex flex-row gap-1">
              {row.map((key, index) => {
                return (
                  <Key
                    value={key.value}
                    alt={key.alt}
                    grow={key.grow}
                    key={index}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const Key = ({ value, alt, grow }) => {
  const [clicked, setClicked] = useState("d");
  return (
    <div
      className={`h-full w-[6.231777614%] text-center flex flex-col justify-center gap-1 font-medium text-key_text dark:text-key_text-dark ${
        value == clicked ? "bg-bar text-key_text-dark dark:bg-bar-dark " : "bg-key dark:bg-key-dark"
      } ${grow && "flex-grow"}`} 
    >
      <span> {alt.toLowerCase() === value.toLowerCase() ? "" : alt}</span>
      <span>{value.includes("-") ? value.slice(value.indexOf("-")+1) : value}</span>
    </div>
  );
};
