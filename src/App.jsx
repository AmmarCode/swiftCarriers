import logo from "./assets/logo1.png";
import "./App.css";

function App() {

  return (
    <>
      <div>
        <img src={logo} className="logo" alt="Swift Carrier Logo" />
      </div>
      <h2>
        Contact us: <a href="mailto: swiftcarriers01@gmail.com"><p>Email</p></a>
      </h2>
    </>
  );
}

export default App;
