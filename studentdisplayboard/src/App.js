import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import UserRoutes from "./Routes/UserRoutes";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="route">
        <UserRoutes />
      </div>
    </div>
  );
}

export default App;
