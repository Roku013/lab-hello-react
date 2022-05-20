// src/App.js
import './App.css';
import IronHackLogo from './images/logo.png';
import Menu from './images/menu.png';
import Fixing from './images/fixing.png';
import Html from './images/html.png';
import Laptop from './images/laptop.png';
import Pc from './images/pc.png';

function App() {
  return (
    <div className="App">
      <section class="top">
        <nav class="nav">
          <img class="nav-img" src={IronHackLogo} alt="Ironhack Logo"></img>
          <img class="nav-img" src={Menu} alt="Menu"></img>
        </nav>
        <div class="main-text">
          <div class="align-all">
            <div>
              <h1 class="say-hello">Say hello to ReactJS</h1>
            </div>
            <div class="top-text">
              <p>
                You will learn how to use the most popular frontend library, and
                become a super Ninja developer.
              </p>
            </div>

            <div>
              <button class="button">Awesome!</button>
            </div>
          </div>
        </div>
      </section>

      <section class="bottom">
        <div>
          <img class="images" src={Fixing}></img>
          <h2>Declarative</h2>
          <p class="description">
            React makes it painless to create interactive Uls.
          </p>
        </div>

        <div>
          <img class="images" src={Laptop}></img>
          <h2>Components</h2>
          <p class="description">
            Build encapsulated components that manage their state.
          </p>
        </div>

        <div>
          <img class="images" src={Pc}></img>
          <h2>Single-Way</h2>
          <p class="description">
            A set of immutable values are passed to the component's.
          </p>
        </div>

        <div>
          <img class="images" src={Html}></img>
          <h2>JSX</h2>
          <p class="description">
            Statically-typed designed to run on modern browsers.
          </p>
        </div>
      </section>
    </div>
  );
}
export default App;
