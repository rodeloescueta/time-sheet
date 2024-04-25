import { create } from "zustand";

type ProjectStore = {
  projects: { project: string; hours: string }[];
  addProject: (project: string, hours?: string) => Promise<void>;
  removeProject: (project: string, hours?: string) => Promise<void>;
};

export const useProjectStore = create<ProjectStore>((set) => ({
  projects: [],
  addProject: async (project, hours) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate delay
    let proj = { project: project, hours: hours ? hours : "0" };
    set((s) => ({ projects: [...s.projects, proj] }));
  },
  removeProject: async (project) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate delay
    set((s) => ({
      projects: s.projects.filter((p) => p.project !== project),
    }));
  },
}));
