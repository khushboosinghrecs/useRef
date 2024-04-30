import "./styles.css";
import Counter from "./ClickCounter";
import StopWatch from './StopWatch';
import FocusInPut from "./FocusInput";
import PlayVedio from "./PlayVedio";
import VedioPlayer from "./PlayPauseVedio";
import OwnComponentRef from "./OwnComponentRef";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Counter />
      <StopWatch />
      <FocusInPut />
      <PlayVedio />
      <VedioPlayer />
      <OwnComponentRef />
    </div>
  );
}
