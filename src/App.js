import Home from './components/Home';
import {React, useState} from 'react'
import Search from './components/Search';
import {Routes, Route} from "react-router-dom";

const App = () => {
  const [search, setSearch] = useState(false);
    return (
      <div className="App">
      <Routes>
        <Route path="/search" element={ <Search/> } />
        <Route path="/" element={ <Home/> }/>
      </Routes>  
    </div>
  )
}

export default App