import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const useCounterStore = create<CounterState>()(
  devtools(
    persist(
      (set) => ({
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 })),
      }),
      { name: "counterStore" }
    )
  )
);

export default useCounterStore;
