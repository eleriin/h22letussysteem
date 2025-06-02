import { Routes, Route } from "react-router-dom"
import Homepage from "./Homepage";
import Question from "./Question";
import Voteroom from "./Voteroom";
 
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/new-question" element={<Question />} />
      <Route path="/vote-room" element={<Voteroom />} />
    </Routes>
  );
}
export default App;

