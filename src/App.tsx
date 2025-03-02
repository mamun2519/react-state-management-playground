import "./App.css";
import { ZustandDemoString } from "./zustand/ZustandDemoString";
import ZustandUserDetails from "./zustand/ZustandUserDetails";

function App() {
  return (
    <>
      <ZustandUserDetails />
      <ZustandDemoString />
    </>
  );
}

export default App;
