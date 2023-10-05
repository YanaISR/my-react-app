import './App.css';
import Users from './components/Users';
import Posts from './components/Posts';
import Albums from './components/Albums';

function App() {

  return (
    <div className='list'>
      <Users />
      <Posts />
      <Albums />
    </div>
    
  );
}

export default App;
