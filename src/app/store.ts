import { create } from "zustand";

// type CounterStore = {
//   count: number;
//   //   increment: () => void;
//   //   decrement: () => void;
//   incrementAsync: () => Promise<void>;
//   decrementAsync: () => Promise<void>;
// };

// export const useCounterStore = create<CounterStore>((set) => ({
//   count: 0,
//   incrementAsync: async () => {
//     await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate delay
//     set((state) => ({ count: state.count + 1 }));
//   },
//   decrementAsync: async () => {
//     await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate delay
//     set((state) => ({ count: state.count - 1 }));
//   },
// }));

type ProjectStore = {
  projects: { project: string; hours: string }[];
  addProject: (projectName: string, hours?: string) => Promise<void>;
  removeProject: (projectName: string, hours?: string) => Promise<void>;
};

export const useProjectStore = create<ProjectStore>((set) => ({
  projects: [],
  addProject: async (projectName, hours) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate delay
    let proj = { project: projectName, hours: hours ? hours : "0" };
    set((s) => ({ projects: [...s.projects, proj] }));
  },
  removeProject: async (projectName) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate delay
    set((s) => ({
      projects: s.projects.filter((p) => p.project !== projectName),
    }));
  },
}));
