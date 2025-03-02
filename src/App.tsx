import "./App.css";
import ReduxUserDetails from "./redux-toolkit/ReduxUserDetails";
import { ReduxWrapper } from "./redux-toolkit/ReduxWrapper";
import { ZustandDemoString } from "./zustand/ZustandDemoString";
import ZustandUserDetails from "./zustand/ZustandUserDetails";

function App() {
  return (
    <>
      {/* Zustand */}
      {/* <ZustandUserDetails />
      <ZustandDemoString /> */}

      {/* Redux */}
      <ReduxWrapper>
        <ReduxUserDetails />
      </ReduxWrapper>
    </>
  );
}

export default App;
