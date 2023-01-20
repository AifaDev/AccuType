import React from "react";
import { useKeys } from "../State";

const Option = ({ name, selections }) => {
  const keys = useKeys();
  const selection = keys[name.toLowerCase().replace(" ", "")];
  return (
    <div className="flex flex-row w-full items-center justify-between py-4 px-8">
      <div className="text-xl text-[#555555] dark:text-[#CDCDCD]">{name}</div>
      <div className="w-3/5 gap-7 flex flex-row justify-between">
        {selections.map((value, index) => (
            
          <div
            onClick={() => {
            keys["set" + name.replace(" ", "")](value);
            }}
            className={`h-9 w-32 rounded-xl justify-center flex flex-grow items-center cursor-pointer ${
              value == selection
                ? "bg-bar-light dark:bg-bar-dark text-[white]"
                : "bg-[#e7e7e7]  text-[#727272] dark:bg-[#555B65] dark:text-[white] "
            }`}
            key={index}
          >{
          }
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Option;
