import create from "zustand";
import axios from "axios";
import randomWords from "random-words";

const Space = [{ key: "\u00A0", state: "paragraph" }];
const Finish = [{ key: "\u00A0", code: "Finish", state: "paragraph" }];

const generateParagraph = async (parm = "Medium") => {
  let length = localStorage.paragraphLength || parm;
  let type = localStorage.paragraphType || "Quote";
  if (type === "Quote") {
    let range = [200, 250];

    if (length === "Short") {
      range = [100, 150];
    } else if (length === "Long") {
      range = [250, 300];
    }
    const url = `https://api.quotable.io/random?minLength=${range[0]}&maxLength=${range[1]}`;

    const res = await axios.get(url);

    return res.data.content;
  } else {
    let range = [30, 8];
    if (length === "Short") {
      range = [20, 6];
    } else if (length === "Long") {
      range = [40, 10];
    }
    return randomWords({
      exactly: 1,
      wordsPerString: range[0],
      maxLength: range[1],
      formatter: (word, index) => {
        return index === 0
          ? word.slice(0, 1).toUpperCase().concat(word.slice(1))
          : word;
      },
    })[0];
  }
};

const generateKeys = (paragraph) => {
  let p = paragraph.replaceAll(" — ", " ");
  const keys = [];
  let currentKey = [];
  for (const c of p) {
    if (c === " ") {
      keys.push(currentKey);
      currentKey = [];
      keys.push(Space);
    } else {
      currentKey.push({ key: c, state: "paragraph" });
    }
  }
  keys.push(currentKey);
  keys.push(Finish);
  return keys;
};

export const useKeys = create((set) => {
  let cacheLetters = [];
  let preText = [];
  (async () => {
    const p = await generateParagraph(localStorage.paragraphLength);
    cacheLetters = generateKeys(p);

    set((state) => {
      state.letters = cacheLetters;
      state.focused = true;
      state.index = [0, 0];
    });
    const pre = await generateParagraph(localStorage.paragraphLength);
    preText = generateKeys(pre);
  })();
  return {
    //Not camel case because it's used in the option component
    theme: localStorage.theme || "System",
    paragraphlength: localStorage.paragraphLength || "Medium",
    paragraphtype: localStorage.paragraphType || "Quote",
    goal: localStorage.goal || "1500",
    keyboard: localStorage.keyboard || "Show",

    keys: {},
    letters: [],
    index: [0, 0],
    firstLetter: 0,
    lastLetter: 0,
    lettersCount: 0,
    typos: 0,
    speed: "N/A",
    accuracy: "N/A",
    streak: 0,
    best: 0,
    progressPercentage: 0,
    progress: 0,
    openedConfig: false,
    size: [window.innerWidth, window.innerHeight],
    focused: false,
    letter: null,
    paragraphRef: null,

    setParagraphRef: (ref) => set((state) => (state.paragraphRef = ref)),
    setTheme(theme) {
      set((state) => {
        if (theme !== "System") {
          localStorage.setItem("theme", theme);
        } else {
          localStorage.removeItem("theme");
        }
        state.theme = theme;
      });
    },
    setGoal(goal) {
      set((state) => {
        localStorage.setItem("goal", goal);
        state.goal = goal;
        state.progressPercentage = state.progress / state.goal;
      });
    },
    setParagraphLength(length) {
      set((state) => {
        localStorage.setItem("paragraphLength", length);
        state.paragraphlength = length;

        (async () => {
          const p = await generateParagraph(length);
          cacheLetters = generateKeys(p);
          const pre = await generateParagraph(length);
          preText = generateKeys(pre);
        })();
        setTimeout(() => {
          set((state) => {
            state.letters = cacheLetters;
            state.index = [0, 0];
          });
        }, 500);
      });
    },
    setParagraphType(type) {
      set((state) => {
        localStorage.setItem("paragraphType", type);
        state.paragraphtype = type;
        (async () => {
          const p = await generateParagraph();
          cacheLetters = generateKeys(p);
          const pre = await generateParagraph();
          preText = generateKeys(pre);
        })();
        setTimeout(() => {
          set((state) => {
            state.letters = cacheLetters;
            state.index = [0, 0];
          });
        }, 500);
      });
    },
    setDailyGoal(goal) {
      set((state) => {
        localStorage.setItem("dailyGoal", goal);
        state.dailygoal = goal;
      });
    },
    setKeyboard(keyboard) {
      set((state) => {
        localStorage.setItem("keyboard", keyboard);
        state.keyboard = keyboard;
        state.letter = null;
      });
    },

    generateKeys: (paragraph) =>
      set((state) => {
        state.letters = generateKeys(paragraph);
      }),
    addKey: (key) =>
      set((state) => {
        state.keys[key] = key;
      }),
    removeKey: (key) =>
      set((state) => {
        delete state.keys[key];
      }),

    setFocus: (bool) =>
      set((state) => {
        state.focused = bool;
      }),
    setIndex: (array) =>
      set((state) => {
        state.index = array;
      }),
    setLetter: (pos) =>
      set((state) => {
        state.letter = pos;
      }),
    updateSize: () =>
      set((state) => {
        state.focused = false;
        state.size = [window.innerWidth, window.innerHeight];
      }),
    toggleConfig: (bool) =>
      set((state) => {
        state.openedConfig = bool;
      }),

    reset: () => {
      localStorage.removeItem("theme");
      localStorage.removeItem("paragraphLength");
      localStorage.removeItem("paragraphType");
      localStorage.removeItem("goal");
      localStorage.removeItem("keyboard");
    },
    updateBrief: () =>
      set((state) => {
        const speed = localStorage.getItem("speed");
        const accuracy = localStorage.getItem("accuracy");
        const streak = localStorage.getItem("streak");
        const best = localStorage.getItem("best");
        const goal = localStorage.getItem("goal");
        const progress = localStorage.getItem("progress");

        if (speed) state.speed = speed + "wpm";
        if (accuracy) state.accuracy = accuracy + "%";
        if (streak) state.streak = streak;
        if (best) state.best = best;
        if (goal) state.goal = goal;
        if (progress) state.progress = progress;
        state.progressPercentage = state.progress / state.goal;
      }),

    startSession: () =>
      set((state) => {
        // state.firstLetter = 0;
        // state.lastLetter = 0;
        state.lettersCount = 0;
        state.typos = 0;
        state.letters = structuredClone(cacheLetters);
      }),
    startCounter: () =>
      set((state) => {
        // state.firstLetter = Date.now();
      }),
    countLetter: () =>
      set((state) => {
        state.lettersCount = state.lettersCount + 1;
      }),
    countTypo: () =>
      set((state) => {
        state.typos = state.typos + 1;
      }),
    endSession: () =>
      set((state) => {
        // state.lastLetter = Date.now();
        // const minutes = (state.lastLetter - state.firstLetter) / 60000;
        const words = state.lettersCount / 5;
        const speed = ~~(words / minutes);
        state.speed = speed + "wpm";
        localStorage.setItem("speed", speed);
        const accuracy = ~~(
          ((state.lettersCount - state.typos) * 100) /
          state.lettersCount
        );
        state.accuracy = accuracy + "%";
        localStorage.setItem("accuracy", accuracy);
        const progress = ~~localStorage.getItem("progress") + ~~words;
        state.progress = progress;
        const goal = localStorage.getItem("goal");
        if (!goal) {
          localStorage.setItem("goal", state.goal);
        }
        localStorage.setItem("progress", state.progress);
        state.progressPercentage = state.progress / state.goal;

        if (accuracy === 100) {
          state.streak += 1;
          localStorage.setItem("streak", state.streak);
        } else {
          state.streak = 0;
          localStorage.setItem("streak", state.streak);
        }
        const best = localStorage.getItem("best");
        if (state.streak > best || !best) {
          localStorage.setItem("best", state.streak);
          state.best = state.streak;
        }

        cacheLetters = preText;
        state.letters = structuredClone(preText);
        state.index = [0, 0];

        (async () => {
          const p = await generateParagraph(state.paragraphlength);
          preText = generateKeys(p);
        })();
      }),
  };
});
