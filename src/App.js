import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import StaticContext from './context/StaticContext';
import {InfoProvider} from './context/InfoContext';

function App() {
  return (

    <StaticContext.Provider value={{
      name: 'Daniel',
      position: 'Developer'
    }}>
      <div className="App">
        <h1>Welcome to a practice of context and react-redux</h1>
        {/* Another provider but with its own provider definition */}
        <InfoProvider>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>

        </InfoProvider>
      </div>
    </StaticContext.Provider>

  );
}

export default App;
