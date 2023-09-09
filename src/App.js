import './App.css';
import Button from './components/Button/Button';

function App() {
  const sayHello = () => console.log('Hello there!');
  const askSomething = () => console.log('How are you?');
  const sayBye = () => console.log('Bye! Have a good day!');

  return (
    <div>
     <div className="App">Hello World</div> 
     <Button text='Greet' handleClick={sayHello}></Button>
     <Button text='Ask' handleClick={askSomething}></Button>
     <Button text='Bye' handleClick={sayBye}></Button>
    </div>
    
  );
}

export default App;
