import { useShallow } from "zustand/react/shallow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useCounterStore from "./store/CounterStore";

// 使用 useShallow 避免 rerender
const CounterPage = () => {
  const { count, decrement, increment } = useCounterStore(
    useShallow((state) => ({
      count: state.count,
      decrement: state.decrement,
      increment: state.increment,
    }))
  );

  return (
    <div className="flex w-full max-w-sm items-center gap-1.5">
      <Button onClick={decrement}>-</Button>
      <Input value={count} />
      <Button onClick={increment}>+</Button>
    </div>
  );
};

export default CounterPage;
