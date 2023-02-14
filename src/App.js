import TopBar from "./components/TopBar/TopBar";
import { UserProvider } from "./contexts/userContext";
import CurrentUserCheker from "./hoc/CurrentUserCheker/CurrentUserCheker";
import Routs from "./Routs";

function App() {
  return (
    <UserProvider>
      <CurrentUserCheker>
        <TopBar />
        <Routs />
      </CurrentUserCheker>
    </UserProvider>
  );
}

export default App;
