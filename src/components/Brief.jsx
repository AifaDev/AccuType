import { useEffect, useLayoutEffect, useRef } from "react";
import { useKeys } from "../State";

export default function Brief({ ...props }) {
  const {
    speed,
    accuracy,
    best,
    goal,
    streak,
    progress,
    progressPercentage,
    updateBrief,
  } = useKeys();
  useLayoutEffect(() => {
    updateBrief();
  }, []);
  return (
    <div {...props}>
      <Record speed={speed} accuracy={accuracy} best={best} />
      <Goal
        progressPercentage={progressPercentage}
        progress={progress}
        goal={goal}
      />
    </div>
  );
}

const Goal = ({ progress, progressPercentage, goal }) => {
  const bar = useRef();
  useEffect(() => {
    console.log(progressPercentage)
    bar.current.style.width = progressPercentage * 100 +"%";
  }, [progressPercentage]);
  return (
    <div className="flex flex-col justify-center h-[55%] md:text-base text-sm">
      <div className="flex items-baseline justify-between gap-4 px-6">
        <span className="whitespace-nowrap text-goal_text dark:text-goal_text-dark">
          Daily Goal
        </span>
        <div className="bg-back_bar dark:bg-back_bar-dark h-3 w-full rounded-full">
          <div           ref={bar}

            className={`bg-bar dark:bg-bar-dark w-0 h-full rounded-full`}
          ></div>
        </div>
        <span
          className="whitespace-nowrap text-goal_text dark:text-goal_text-dark xm:block hidden"
        >
          {progress + "/" + goal}
        </span>
      </div>
    </div>
  );
};

const Record = ({ speed, accuracy, best }) => (
  <div className="xm:relative flex flex-row border-b border-b-brief_border dark:border-b-brief_border-dark xm:justify-between justify-center items-center font-normal md:text-xl xm:text-base text-sm h-[45%] md:pl-16 md:pr-28 xm:pl-8 xm:pr-14 text-brief_text dark:text-brief_text-dark">
    <span className="whitespace-nowrap xm:mr-0 mr-[15%]">
      Speed: <div className="min-w-[76px] inline-block">{speed}</div>
    </span>
    <span className="whitespace-nowrap">
      Accuracy: <div className="min-w-[41px] inline-block">{accuracy}</div>
    </span>
    <span className="whitespace-nowrap sm:block hidden">
      Streak: <div className="min-w-[34px] inline-block">12+ </div>
    </span>
    <span className="whitespace-nowrap xm:flex flex-row items-center gap-px hidden">
      <span>
        Best: <div className="min-w-[76px] inline-block">{best} </div>
      </span>
      <CrownIcon className="w-7 stroke-crown dark:stroke-crown-dark transform md:scale-100 scale-75" />
    </span>
    <ConfigButton className="absolute xm:right-4 xm:top-auto top-4 right-4 md:scale-[1.55] scale-[1.45] fill-config_button dark:fill-config_button-dark" />
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
    <svg
      {...props}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="m12 6 4 6 5-4-2 10H5L3 8l5 4z" />
    </svg>
  );
};
