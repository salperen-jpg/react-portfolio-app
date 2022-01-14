import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
function App() {
  return (
    <main>
      <Navbar />
      <Sidebar />
      <Home />
    </main>
  );
}

export default App;
