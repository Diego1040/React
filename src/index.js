import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter , Route, Routes,} from "react-router-dom";
import Root from "./Root/Root.js"
import Combate from "./Combate/Combate.js";
import Lista from "./Lista/Lista.js";
import Historial from "./Historial/Historial.js"
import Search from "./Search/search.js"
import Pokemon from './Pokemon/Pokemon';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Root></Root>
    <Routes>

       <Route path="/lista" element={<Lista/>}></Route>
       <Route path="/historial" element={<Historial/>}></Route>
       <Route path="/combate" element={<Combate/>}></Route>
       <Route path="/search" element={<Search/>}></Route>
       <Route path="/pokemon" element={<Pokemon/>}></Route>

    </Routes>
    </BrowserRouter>
  </React.StrictMode>

  
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


