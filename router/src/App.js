// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from './component/Home';
// import About from './component/About';
// import Contact from './component/Contect'; // Make sure this file name matches

// function App() {
//   return (
//     <Router>
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import React from 'react';
// import {BrowserRouter as Router, Routes,Route,Link } from "react-router-dom";
// import Home from './component/About';
// import About from './component/About';
// import Contect from './component/Contect';

// function App(){
//   return(
//     <Router>
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/About">About</Link>
//         <Link to="/Contect">Contect</Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/About" element={<About/>} />
//         <Route path="/Contect" element={<Contect/>} />
//       </Routes>
//     </Router>
//   );
// }
// export default App;

// import React from 'react';
// import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
// import Home from './component/Home'; 
// import About from './component/About';
// import Contect from './component/Contect';
// function App(){
//     return(
//         <Router>
//             <nav>
//                 <Link to="/">Home</Link>
//                 <Link to="/About">About</Link>
//                 <Link to="/Contect">Contect</Link>
//             </nav>
//             <Routes>
//                 <Route path="/" element={<Home/>} />
//                 <Route path="/About" element={<About/>} />
//                 <Route path="/Contect" element={<Contect/>} />
//             </Routes>
//         </Router>
//     );
// }
// export default App;



import React from 'react';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import About from './component/About';
import Contect from './component/Contect';
import Home from './component/Home';

function App(){
    return(
        <Router>
            <nav>
                <Link to="/">About</Link>
                <Link to="/Contect">Contect</Link>
                <Link to="/Home">Home</Link>
            </nav>
            <Routes>
                <Route path="/" element={<About/>} />
                <Route path="/Contect" element={<Contect/>} />
                <Route path="/Home" element={<Home/>} />
            </Routes>
        </Router>
    );
}
export default App;