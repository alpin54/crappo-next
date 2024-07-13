import { create } from "zustand";

const useStateSubscribe = create((set) => ({
	total: 0,
	setTotal: (newTotal) => set({ total: newTotal }),
}));

export default useStateSubscribe;
