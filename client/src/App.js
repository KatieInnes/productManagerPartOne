import './App.css';
import Form from './components/ProductForm';

function App() {
  return (
    <div className = "App">
      <Form />
    </div>
  );
}

export default App;


// import React, { useState } from 'react';
// // import axios from 'axios';
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import Main from '../views/Main';
// // import PersonForm from '../components/PersonForm';
// // import PersonList from '../components/PersonList';
// const App = () => {
    
//     return(
//         <div>
//             <BrowserRouter>
//                   <Routes>
//             <Route element={<Main/>} path="/home" default />
//                   </Routes>
//             </BrowserRouter>
//         </div>
//     ) 
// }
// export default App;
