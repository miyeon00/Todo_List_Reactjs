import TodoList from './components/TodoList'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <div className='main'>
      <div className='container'>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
