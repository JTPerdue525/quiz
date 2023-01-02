import React from "react"
import {      
  BrowserRouter,  //Used to route between pages
  Routes,
  Route
} from "react-router-dom";
import Title from "./components/Title"
import QuestionPage from "./components/QuestionPage";

//Link to question using routes perhaps
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Title/>} />
          <Route exact path="/qpage" element={<QuestionPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
