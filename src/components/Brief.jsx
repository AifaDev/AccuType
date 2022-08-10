

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
        <span className="text-base whitespace-nowrap">Daily Goal</span>
        <div className="bg-gray-200 h-3 w-full rounded-full">
          <div className="bg-black w-[50%] h-full rounded-full"></div>
        </div>
        <span className="text-base whitespace-nowrap">735/1500</span>
      </div>
    </div>
  );
};

const Record = () => (
  <div className="flex flex-row border-b justify-between items-center font-normal text-xl h-[45%] pl-16 pr-[12rem]">
    <span className="whitespace-nowrap">Speed: N/A</span>
    <span className="whitespace-nowrap">Accuracy: N/A </span>
    <span className="whitespace-nowrap">Improvement: N/A</span>
    <span className="whitespace-nowrap">Best: N/A</span>
  </div>
);
