import "./App.css";

/* Import Components */
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";

/* Import useState from React */
import { useState } from "react";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <div>
      <Header />
      <main>
        <div className="wrapper">
          <div>
            <Buttons switchy={switch1} setSwitch={setSwitch1} />
            <Buttons switchy={switch2} setSwitch={setSwitch2} />
            <Buttons switchy={switch3} setSwitch={setSwitch3} />
          </div>
          <div>
            {switch1 && switch2 && switch3 ? (
              <button
                className="go"
                style={{
                  backgroundColor: "#00FF7F",
                  width: 200,
                }}
              >
                Goooo!
              </button>
            ) : (
              <button
                className="go"
                style={{
                  backgroundColor: "#ff5454",
                  width: 200,
                }}
              >
                No way!
              </button>
            )}
            {/* <button
              className="go"
              style={{
                backgroundColor:
                  switch1 === true && switch2 === true && switch3 === true
                    ? "#00FF7F"
                    : "#ff5454",
              }}
            >
              No way!
            </button> */}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
