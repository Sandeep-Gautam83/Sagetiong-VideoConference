import './App.css';
import { Routes, Route } from 'react-router-dom';
import JoinRoom from "./pages/JoinRoom";
import Room from "./pages/Room";

function App() {
  return (
    <Routes>
      <Route path="/" element={<JoinRoom />} />
      <Route path="/room/:id" element={<Room />} />
    </Routes>
  );
}

export default App;
