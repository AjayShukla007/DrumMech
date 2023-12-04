import { useState, useEffect } from "react";
import "./App.css";

// import Heater1 from './assets/Heater-1.mp3';
import {
  Heater1,
  Heater2,
  Heater3,
  Heater4,
  Heater6,
  dsc,
  kick,
  rp4,
  cev
} from "./Audios.jsx";

function App() {
  const [val, setVal] = useState();
  const [text, setText] = useState();
  // const handleBtnClick = e => {
  //   const audio = e.target.children[0];
  //   audio.play();
  //   setText(e.target.innerText);
  // };// for prototype
  
  const playSound = (id) => {
    const audio = document.getElementById(id);
    audio.currentTime = 0;
    audio.play();
    setText(id);
  };

  const handleKeyDown = (e) => {
    const key = e.key.toUpperCase();
    const button = document.getElementById(key);
    if (button) {
      button.click();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  
  return (
    <div id="drum-machine">
    <input type="text" name="" id="" value={val} onChange={(e)=>setVal(e.target.value)} />
      <div id="display">{text}</div>

      <button onClick={() => playSound('Q')} id="Heater-1" className="drum-pad">
        Q<audio className="clip" id="Q" src={Heater1}></audio>
      </button>
      <button onClick={() => playSound('W')} id="Heater-2" className="drum-pad">
        W<audio className="clip" id="W" src={Heater2}></audio>
      </button>
      <button onClick={() => playSound('E')} id="Heater-3" className="drum-pad">
        E<audio className="clip" id="E" src={Heater3}></audio>
      </button>
      <button onClick={() => playSound('A')} id="Heater-4_1" className="drum-pad">
        A<audio className="clip" id="A" src={Heater4}></audio>
      </button>
      <button onClick={() => playSound('S')} id="Heater-6" className="drum-pad">
        S<audio className="clip" id="S" src={Heater6}></audio>
      </button>
      <button onClick={() => playSound('D')} id="Dsc_Oh" className="drum-pad">
        D<audio className="clip" id="D" src={dsc}></audio>
      </button>
      <button onClick={() => playSound('Z')} id="Kick_n_Hat" className="drum-pad">
        Z<audio className="clip" id="Z" src={kick}></audio>
      </button>
      <button onClick={() => playSound('X')} id="RP4_KICK_1" className="drum-pad">
        X<audio className="clip" id="X" src={rp4}></audio>
      </button>
      <button onClick={() => playSound('C')} id="Cev_H2" className="drum-pad">
        C<audio className="clip" id="C" src={cev}></audio>
      </button>
    </div>
  );
}

export default App;
