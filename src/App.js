import { Routes, Route } from "react-router-dom"
import Homepage from "./Homepage";
import Question from "./Question";

 
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/new-question" element={<Question />} />
    </Routes>
  );
}
export default App;

