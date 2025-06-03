import { Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage";
import Voteroom from "./pages/Voteroom";
import Admin from "./pages/Admin";
import Log from "./pages/Log";
 
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/vote-room" element={<Voteroom />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/log" element={<Log />} />
    </Routes>
  );
}
export default App;

