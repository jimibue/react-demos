import "./App.css";
import AxiosGet, { AxiosGetCode } from "./demos/AxiosGet";
import Counter from "./demos/Counter";
import DemoContainer from "./demos/DemoContainer";
import Map, { MapData } from "./demos/Map";

function App() {
  return (
    <div>
      <DemoContainer />
      <Counter />

      <DemoContainer header={"Axios get request"} code={AxiosGetCode}>
        <AxiosGet />
      </DemoContainer>

      <DemoContainer header={"Map"} code={MapData}>
        <Map />
      </DemoContainer>
    </div>
  );
}

export default App;
