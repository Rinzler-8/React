import logo from "./logo.svg";
import "./App.scss";
import MyComponent2 from "./Example/MyComponent2";
import MyComponent from "./Example/MyComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Take me back back home</p>

        <MyComponent2 />
      </header>
    </div>
  );
}

export default App;
