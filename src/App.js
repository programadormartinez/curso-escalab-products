
import Home from './pages/Home';
import { Details } from './pages/Details';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/' ></Route>
        <Route element={<Details />} path='/details'></Route>
      </Routes>
    </BrowserRouter>
         
  );
}

export default App;
