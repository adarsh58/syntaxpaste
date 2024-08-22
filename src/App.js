
import './App.css';
import Heading from './Component/Home/Heading';
import Info from './Component/Info/Info';
import NavBar from './Component/Navbar/NavBar';
import Syntax from './CopySyntax/Syntax';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <NavBar />
     

        <Routes>
          <Route exact path="/" element={<> <div className="container">
            <Heading />
            <Info />

          </div> </>} />
          <Route exact path="/home" element={<> <div className="container">
            <Heading />
            <Info />

          </div> </>} />
          <Route exact path="/syntax" element={<Syntax />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
