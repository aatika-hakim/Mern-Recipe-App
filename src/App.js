import './App.css';
import Jumbotron from './Components/Jumbotron';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <div className='jumbotron'>
    <Navbar />
    <Jumbotron />
        <h1>Recipe App</h1>
    </div>
  )
}

export default App;