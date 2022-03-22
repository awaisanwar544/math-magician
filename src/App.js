import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CalculatorPage from './components/CalculatorPage';
import Header from './components/Header';
import Home from './components/Home';
import Quote from './components/Quote';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header className="App-header" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
