import { create } from "zustand";

// Upload state lives in memory until publish (no drafts).
type UploadState = {
  sessionId: string;
  reset: () => void;
};

export const useUploadStore = create<UploadState>((set) => ({
  sessionId: crypto.randomUUID(),
  reset: () => set({ sessionId: crypto.randomUUID() }),
}));
