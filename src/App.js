import TopBar from "./components/TopBar/TopBar";
import LengContext from "./LengContext";
import Routs from "./Routs";

function App() {
  return (
    <>
      <LengContext.Provider value={{ leng: "UA" }}>
        <TopBar />
        <Routs />
      </LengContext.Provider>
    </>
  );
}

export default App;
