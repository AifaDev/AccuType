export default function Brief({ ...props }) {
  return (
    <div {...props}>
      <Record />
      <Goal />
    </div>
  );
}

const Goal = () => {
  return (
    <div className="flex flex-col justify-center h-[55%]">
      <div className="flex items-baseline justify-between gap-4 px-6">
        <span className="text-base whitespace-nowrap text-[#999898]">Daily Goal</span>
        <div className="bg-[#E9E9E9] h-3 w-full rounded-full">
          <div className="bg-[#12C9D1] w-[50%] h-full rounded-full"></div>
        </div>
        <span className="text-base whitespace-nowrap text-[#999898]">735/1500</span>
      </div>
    </div>
  );
};

const Record = () => (
  <div className="relative flex flex-row border-b justify-between items-center font-normal text-xl h-[45%] pl-16 pr-28 text-[#898989]">
    <span className="whitespace-nowrap">Speed: N/A</span>
    <span className="whitespace-nowrap">Accuracy: N/A </span>
    <span className="whitespace-nowrap">Improvement: N/A</span>
    <span className="whitespace-nowrap flex flex-row items-center gap-1">
     <span>Best: N/A </span> <CrownIcon className="w-7 stroke-[#FFD336]" />
    </span>
    <ConfigButton className="absolute right-4 scale-[1.75] fill-[#9B9B9B]" />
  </div>
);

const ConfigButton = ({ ...props }) => {
  return (
    <svg {...props} width="16" height="16">
      <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
    </svg>
  );
};

const CrownIcon = ({ ...props }) => {
  return (
    <svg { ...props }
      fill="none"
      stroke="#2c3e50"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      viewBox="0 0 24 24"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="m12 6 4 6 5-4-2 10H5L3 8l5 4z" />
    </svg>
  );
};
