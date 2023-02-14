import TopBar from "./components/TopBar/TopBar";
import { UserProvider } from "./contexts/userContext";
import Routs from "./Routs";

function App() {
  return (
    <>
      <UserProvider>
        <TopBar />
        <Routs />
      </UserProvider>
    </>
  );
}

export default App;
