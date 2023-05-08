// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import FetchItems from './components/FetchItems';
function App() {
  return (
   <>
    <Routes>
        <Route path="/fetchitems" element={<FetchItems />} />
        

      </Routes>
   </>
  );
}

export default App;
