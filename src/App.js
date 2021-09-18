import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <ArticleWithJSX></ArticleWithJSX>
      <Blog heading = 'Heading 1' author = 'Sejan'></Blog>
      <Blog heading = 'Heading 2' author = 'Sajal'></Blog>
      <Blog heading = 'Heading 3' author = 'ASH'></Blog>
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

export default App;
