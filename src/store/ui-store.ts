import { create } from "zustand";

interface UIState {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  toggleMobileMenu: () => void;
}

export const useUIStore = create<UIState>()((set) => ({
  mobileMenuOpen: false,
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
  toggleMobileMenu: () => set((s) => ({ mobileMenuOpen: !s.mobileMenuOpen })),
}));

interface ContactFormState {
  submitted: boolean;
  setSubmitted: (value: boolean) => void;
}

export const useContactFormStore = create<ContactFormState>()((set) => ({
  submitted: false,
  setSubmitted: (value) => set({ submitted: value }),
}));
