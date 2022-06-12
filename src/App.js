import './App.css';
import { Fragment } from 'react';
import Search from './Components/Search/Search';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Card from './Components/Card/Card';
import DataLoader from './Components/DataLoader/DataLoader';

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
        <Route exact path="/" element={ <Search/> } />
        <Route exact path="/DataLoader" element={ <DataLoader/> } />        
        {/* <Route exact path="/" element={ <Card/> } />         */}
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
