import { useCounterContext } from "../../CounterContext";

export const Home = () => {
  const [state, dispatch] = useCounterContext();

  return (
    <div>
      <h1>Oi</h1>
    </div>
  );
};
