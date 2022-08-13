import { useState } from "react";
import querty from "../assets/querty.json";

export default function Keyboard({ ...props }) {
  return (
    <div {...props}>
      <div className="w-[898.62px] h-[302.13px] bg-[#A5A5A5] flex flex-col gap-1 p-1">
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
      className={`h-full w-14 text-center flex flex-col justify-center gap-1 font-medium text-[#A5A5A5] ${
        value == clicked ? "bg-[#12C9D1] text-white" : "bg-[#FAFAFA]"
      } ${grow && "flex-grow"}`} 
    >
      <span> {alt.toLowerCase() === value.toLowerCase() ? "" : alt}</span>
      <span>{value.includes("-") ? value.slice(value.indexOf("-")+1) : value}</span>
    </div>
  );
};
