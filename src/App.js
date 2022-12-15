import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import GlobalStyle from './GlobalStyle'
import Home from './page/Home'
import List from './page/List'
import Creator from './page/Creator'
import CalenderPage from './page/CalenderPage';

function App() {

  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/list' element={<List />} />
          <Route path='/calender' element={<CalenderPage />} />
          <Route path='/creator' element={<Creator />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
