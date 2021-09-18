import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <Mobile></Mobile>
      <ArticleWithJSX></ArticleWithJSX>
      <Blog heading = 'Heading 1' author = 'Sejan'></Blog>
      <Blog heading = 'Heading 2' author = 'Sajal'></Blog>
      <Blog heading = 'Heading 3' author = 'ASH'></Blog>
      <Comment></Comment>
    </div>
  );
}
function ArticleWithJSX(){
  const h2Style = {
    color : "#c7f2ff",
    backgroundColor : '#293752',
    borderRadius: '10px',
  }
  return (
    <article className="blog">
      <h2 style={h2Style}>This is Article Tag</h2> 
    <p style={{color : "#c7f2ff",backgroundColor : '#293752',borderRadius: '10px',}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dignissimos rerum, repellat numquam sapiente fugiat, veniam quis sint quos, quia quaerat! Consequuntur inventore cupiditate unde eaque voluptas illum hic esse!</p>
    </article>
  )
}

function Blog(props){
  return (
    <div className="blog">
      <h2>Heading  : {props.heading}</h2>
      <h2>Author : {props.author}</h2>
    </div>
  )
}

function Mobile(){
  const [charge,setCharge]=useState(100);
  
  const BatteryUp = ()=>{
    if(charge<100){
      setCharge(charge+10)
    }
  };
  const BatteryDown = ()=>{
    if(charge>0){
      setCharge(charge-10)
    }
  };
  return(
    <div>
      <h2>Mobile Battery Charge : {charge} %</h2>
      <button onClick={BatteryUp}>Battery UP</button>
      <button onClick={BatteryDown}>Battery Down</button>
    </div>
  )
}

function Comment(){
  const [users,setUsers] =useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res=>res.json())
      .then(data=>setUsers(data.splice(0,50)))
  },[])
  return (
    <div>
      {
        users.map(user=><ShowUser name={user.name} email={user.email} body={user.body} id={user.id}></ShowUser>)
      }
    </div>
  )
}
function ShowUser(props){
    return (
      <div className="blog">
      <h1>{props.id}</h1>
      <h2>Name  : {props.name}</h2>
      <h2>Email : {props.email}</h2>
      <p>{props.body}</p>
    </div>
    )
}

export default App;
