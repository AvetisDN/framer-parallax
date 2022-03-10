import Home from "./screens/Home";
import Last from "./screens/Last";
import Second from "./screens/Second";

const App = () => {
  return (
    <div className="w-full bg-base-300">
      <div className="w-full mx-auto max-w-5xl">
        <Home />
        <Second />
        <Last />
      </div>
    </div>
  );
};

export default App;
