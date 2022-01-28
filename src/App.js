import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Navbar/Header';
import Generateform from './Components/GenerateForm/Generateform';
import {
  BrowserRouter,
  Routes,
  Route


} from "react-router-dom";
import Formmake from './Components/Formmake/Formmake';
import Formview from './Components/Formview/Formview';


function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Header></Header>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/generateform" element={<Generateform />} />
          <Route path="/home" element={<Home />} />
          <Route path="/formmake/:generateId" element={<Formmake />} />
          <Route path="/formview/:generateId" element={<Formview />} />

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
