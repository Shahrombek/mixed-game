import { Route, Routes } from "react-router-dom";
// import "./App.css";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import TicTacToe from "./pages/TicTacToe";
import LikeDislike from "./pages/LikeDislike";
import ToshQaychiQogoz from "./pages/ToshQaychiQogoz";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tosh-qaychi-qogoz" element={<ToshQaychiQogoz />} />
      <Route path="/tic-tac-toe" element={<TicTacToe/>} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/like-dislike" element={<LikeDislike />} />
    </Routes>
  );
}

export default App;
