import { create } from "zustand";
import { persist } from "zustand/middleware";

type ProjectStore = {
  projects: { project: string; hours: string }[];
  isLoading: boolean;
  addProject: (project: string, hours?: string) => Promise<void>;
  removeProject: (project: string, hours?: string) => Promise<void>;
};

export const useProjectStore = create<ProjectStore>()(
  persist(
    (set) => ({
      projects: [],
      isLoading: false,
      addProject: async (project, hours) => {
        set(() => ({ isLoading: true }));
        await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate delay
        let proj = { project: project, hours: hours ? hours : "0" };
        set(() => ({ isLoading: false }));
        set((s) => ({ projects: [...s.projects, proj] }));
      },
      removeProject: async (project) => {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate delay
        set((s) => ({
          projects: s.projects.filter((p) => p.project !== project),
        }));
      },
    }),
    {
      name: "projects",
    }
  )
);
