// --- zustand
import { create } from "zustand";

const useStateHeader = create((set) => ({
	menu: "",
	totalCart: 0,
	setMenu: (val) => set({ menu: val }),
	setTotalCart: (total) => set({ totalCart: total }),
}));

export default useStateHeader;
