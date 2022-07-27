import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Router>
    <App />
      <Routes>
        <Route path='/' element={<UnicornMain />} />
        <Route path='/easy' element={<Easy />}/>
        <Route path='/medium' element={<Medium />} />
        <Route path='/hard' element={<Hard />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
function UnicornMain() {
  return (
    <div id='unicornMain'></div>
  )
}
function App() {
  return (
    <div>
      <Header />
    </div>
  )
}

function Header() {
  function handleClick(e){
    console.log(e.target.id)
    switch(e.target.id){
      case 'choiceEasy': 
        document.getElementById('choiceEasy').style.backgroundColor = 'black'
        document.getElementById('choiceEasy').style.color = 'white'
        document.getElementById('choiceMedium').style.backgroundColor = 'white'
        document.getElementById('choiceMedium').style.color = 'black'
        document.getElementById('choiceHard').style.backgroundColor = 'white'
        document.getElementById('choiceHard').style.color = 'black';
        break;
        case 'choiceMedium':
        document.getElementById('choiceEasy').style.backgroundColor = 'white'
        document.getElementById('choiceEasy').style.color = 'black'
        document.getElementById('choiceMedium').style.backgroundColor = 'black'
        document.getElementById('choiceMedium').style.color = 'white'
        document.getElementById('choiceHard').style.backgroundColor = 'white'
        document.getElementById('choiceHard').style.color = 'black';
        break;
      case 'choiceHard':
        document.getElementById('choiceEasy').style.backgroundColor = 'white'
        document.getElementById('choiceEasy').style.color = 'black'
        document.getElementById('choiceMedium').style.backgroundColor = 'white'
        document.getElementById('choiceMedium').style.color = 'black'
        document.getElementById('choiceHard').style.backgroundColor = 'black'
        document.getElementById('choiceHard').style.color = 'white';
        break;
      default: 
      document.getElementById('choiceEasy').style.backgroundColor = 'black'
        document.getElementById('choiceEasy').style.color = 'white'
        document.getElementById('choiceMedium').style.backgroundColor = 'white'
        document.getElementById('choiceMedium').style.color = 'black'
        document.getElementById('choiceHard').style.backgroundColor = 'white'
        document.getElementById('choiceHard').style.color = 'black';
        break;
    }
  }
  return (
    <div id='difficulty'>
      <NavLink  to='/easy'><button  onClick={handleClick} class='choice' id='choiceEasy'>Easy</button></NavLink>
      <NavLink to='/medium'><button onClick={handleClick} class='choice' id='choiceMedium' >Medium</button></NavLink>
      <NavLink to='/hard'><button onClick={handleClick} class='choice' id='choiceHard'>Hard</button></NavLink>
      
    </div>
  )
}

function Easy() {
  const [randomNumber1, set1] = useState(0);
  const [randomNumber2, set2] = useState(0);
  
  const [streak, setStreak] = useState(0)
  const [name, setName] = useState('Moxxi')
  const names = ['Jordan', 'Julia', 'Mom', 'Dad', 'Jynx', 'Moxxi', 'Grandma']
  
  function handleStart() {
    let randoNamePick = Math.floor(Math.random() * names.length)
    console.log(randoNamePick)
    console.log(names[randoNamePick])
    setName(names[randoNamePick])
    let random1 = Math.floor(Math.random() * 10)
    set1(random1)
    set2(Math.floor(Math.random() * 10))
    console.log(random1)
   
    
  }
 
    
  
  function handleSubmit(arrayTest){
   
   
    let correctAnswer = randomNumber1 * randomNumber2
    console.log(arrayTest)
    console.log(correctAnswer)
    // eslint-disable-next-line
    if(arrayTest.join('') == correctAnswer){
      
      setStreak(prev => prev += 1)
      document.getElementById('animate').style.display = 'flex'
      document.getElementById('animate').style.animation = 'appear 2s'
      setTimeout( () => {
        document.getElementById('animate').style.display = 'none'
        document.getElementById('animate').style.animation = 'none'}, 1000)
    } else {
      alert('not quite')
      setStreak(0)
    }
    
    handleStart()
  }
  // eslint-disable-next-line
  useEffect(()=> handleStart,[])
      return (
    <div>
      <div id='questionBox'>
      <h1>{name} is wondering: </h1>
      <h1>what is {randomNumber1} x {randomNumber2}?</h1>
     </div>
      
      
      <NumPad handleSubmit={handleSubmit} />
      <div id='animate'><h2>{streak} in a row!</h2></div>
      <UnicornField streak={streak}/>
    </div>
  )
}
function UnicornField(props) {
  let unicornArray = []
  
    for(let i = 0; i < props.streak; i++){
      unicornArray.push(<Unicorn key={i} />)
    }
  
  return(
    <div id='unicornCont'>
      {unicornArray.map(element => element)}
    </div>
  )
}
function Unicorn() {
  return(
    <div id='unicorn'>
      
    </div>
  )
}
function NumPad(props) {
  const [guess, setGuess] = useState([]);
  function handleClick(e){
    if(guess.length < 3){
    setGuess(prev => [...prev, e.target.value])
    console.log(guess)} else {
      alert('number too large')
    }
  }
  function handleDelete(){
    setGuess(prev => prev.slice(0,guess.length - 1))
   
  }
  function handleSubmit(){
    props.handleSubmit(guess)
    setGuess([])
  }
  return (
    <div id="numPadCont">
      <div id="guessCont">
      <div id="guessBox">{guess}</div>
      </div>
    <div id='keyPad'>
      <button onClick={handleClick} value={1} class='numberInput'>1</button>
      <button onClick={handleClick} value={2} class='numberInput'>2</button>
      <button onClick={handleClick} value={3} class='numberInput'>3</button>
      <button onClick={handleClick} value={4} class='numberInput'>4</button>
      <button onClick={handleClick} value={5} class='numberInput'>5</button>
      <button onClick={handleClick} value={6} class='numberInput'>6</button>
      <button onClick={handleClick} value={7} class='numberInput'>7</button>
      <button onClick={handleClick} value={8} class='numberInput'>8</button>
      <button onClick={handleClick} value={9} class='numberInput'>9</button>
      <button onClick={handleDelete} class='delete' >Delete</button><button onClick={handleClick} value={0} class='numberInput'>0</button><button onClick={handleSubmit} class='delete'>Submit</button>
    </div>
    </div>
  )
}
function Medium() {
  const [randomNumber1, set1] = useState(0);
  const [randomNumber2, set2] = useState(0);
  
  const [streak, setStreak] = useState(0)
  const [name, setName] = useState('')
  const names = ['Jordan', 'Julia', 'Mom', 'Dad', 'Jynx', 'Moxxi', 'Grandma']
  
  function handleStart() {
    let randoNamePick = Math.floor(Math.random() * names.length)
    console.log(randoNamePick)
    console.log(names[randoNamePick])
    setName(names[randoNamePick])
    let random1 = Math.floor(Math.random() * 20)
    set1(random1)
    set2(Math.floor(Math.random() * 10))
    console.log(random1)
  }
  
  function handleSubmit(arrayTest){
    
   
    let correctAnswer = randomNumber1 * randomNumber2
    console.log(arrayTest)
    console.log(correctAnswer)
    // eslint-disable-next-line
    if(arrayTest.join('') == correctAnswer){
     
      setStreak(prev => prev += 1)
      document.getElementById('animate').style.display = 'flex'
      document.getElementById('animate').style.animation = 'appear 2s'
      setTimeout( () => {
        document.getElementById('animate').style.display = 'none'
        document.getElementById('animate').style.animation = 'none'}, 1000)
    } else {
      alert('not quite')
      setStreak(0)
    }
    handleStart()
  }
  // eslint-disable-next-line
  useEffect(()=> handleStart,[])
      return (
    <div>
       <div id='questionBox'>
      <h1>{name} is wondering: </h1>
      <h1>what is {randomNumber1} x {randomNumber2}?</h1>
     </div>
      
     
      <NumPad handleSubmit={handleSubmit} />
      <div id='animate'><h2>{streak} in a row!</h2></div>
      <UnicornField streak={streak}/>
    </div>
  )
}
function Hard() {
  const [randomNumber1, set1] = useState(0);
  const [randomNumber2, set2] = useState(0);
  
  const [streak, setStreak] = useState(0)
  const [name, setName] = useState('')
  const names = ['Jordan', 'Julia', 'Mom', 'Dad', 'Jynx', 'Moxxi', 'Grandma']
  
  function handleStart() {
    let randoNamePick = Math.floor(Math.random() * names.length)
    console.log(randoNamePick)
    console.log(names[randoNamePick])
    setName(names[randoNamePick])
    let random1 = Math.floor(Math.random() * 20)
    set1(random1)
    set2(Math.floor(Math.random() * 20))
    console.log(random1)
  }
  
  function handleSubmit(arrayTest){
    
   
    let correctAnswer = randomNumber1 * randomNumber2
    console.log(arrayTest)
    console.log(correctAnswer)
    // eslint-disable-next-line
    if(arrayTest.join('') == correctAnswer){
     
      setStreak(prev => prev += 1)
      document.getElementById('animate').style.display = 'flex'
      document.getElementById('animate').style.animation = 'appear 2s'
      setTimeout( () => {
        document.getElementById('animate').style.display = 'none'
        document.getElementById('animate').style.animation = 'none'}, 1000)
    } else {
      alert('not quite')
      setStreak(0)
    }
    handleStart()
  }
  // eslint-disable-next-line
  useEffect(()=> handleStart,[])
      return (
    <div>
       <div id='questionBox'>
      <h1>{name} is wondering: </h1>
      <h1>what is{randomNumber1} x {randomNumber2}?</h1>
     </div>
      
      
      <NumPad handleSubmit={handleSubmit} />
      <div id='animate'><h2>{streak} in a row!</h2></div>
      <UnicornField streak={streak}/>
    </div>
  )
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
