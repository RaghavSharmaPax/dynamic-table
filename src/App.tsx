import "./App.css";
import Modal from "./components/core/Modal";
import TableMaker from "./pages/TableMaker";

function App() {
  return (
    <div className="App">
      <Modal />
      <TableMaker />
    </div>
  );
}

export default App;

// need to handle in case if the endpoint given is invalid
