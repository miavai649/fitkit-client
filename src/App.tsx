import { useState } from "react";
import { Button } from "./components/ui/button";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex h-screen w-full justify-center items-center ">
      <div className="flex items-center border border-sky-500 rounded-md p-12">
        <Button className="bg-green-500" onClick={() => setCount(count + 1)}>
          Increment
        </Button>
        <h1 className="mx-10">{count}</h1>
        <Button className="bg-red-500" onClick={() => setCount(count - 1)}>
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default App;
