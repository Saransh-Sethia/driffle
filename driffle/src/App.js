import "./App.css";

import Dashboard1 from "./components/Dashboard1";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Dashboard2 from "./components/Dashboard2";
import Dashboard3 from "./components//Dashboard3";
function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Dashboard1 />
        <Dashboard2 />
        <Dashboard3 />
        <Content />
      </div>
    </>
  );
}

export default App;
