import { create } from "zustand";

export interface ModalState {
  isOpen: boolean;
  modalType: string | null;
  modalData?: unknown;
}

export interface UIStoreState {
  sidebarOpen: boolean;
  activeNavTab: string;
  modal: ModalState;
  
  // Actions
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  setActiveNavTab: (tab: string) => void;
  openModal: (type: string, data?: unknown) => void;
  closeModal: () => void;
}

export const useUIStore = create<UIStoreState>((set) => ({
  sidebarOpen: false,
  activeNavTab: "overview",
  modal: {
    isOpen: false,
    modalType: null,
  },

  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setSidebarOpen: (open: boolean) => set({ sidebarOpen: open }),
  setActiveNavTab: (tab: string) => set({ activeNavTab: tab }),
  openModal: (type: string, data?: unknown) =>
    set({
      modal: {
        isOpen: true,
        modalType: type,
        modalData: data,
      },
    }),
  closeModal: () =>
    set({
      modal: {
        isOpen: false,
        modalType: null,
        modalData: undefined,
      },
    }),
}));

// Selectors for optimized re-renders
export const selectSidebarOpen = (state: UIStoreState) => state.sidebarOpen;
export const selectActiveNavTab = (state: UIStoreState) => state.activeNavTab;
export const selectModal = (state: UIStoreState) => state.modal;
