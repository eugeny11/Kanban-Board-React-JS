import React, {useState, useEffect} from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {

const initialState = JSON.parse(window.localStorage.getItem('goals') )|| []
const [goals, setGoals] = useState(initialState)

useEffect(() => {
  window.localStorage.setItem('goals', JSON.stringify(goals))
}, [goals])

  return (
   <BrowserRouter>
      <div className='app'>
        <Header />
        <Main goals={goals} setGoals={setGoals} />
        <Footer goals={goals} />
      </div>
   </BrowserRouter>
  );
}

export default App;
