import "./App.css";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="container">
      <Header />
      <AddTask />
      <Tasks />
      <Footer />
    </div>
  );
}

export default App;
