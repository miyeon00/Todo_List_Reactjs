import TodoList from './components/TodoList'
import './App.css';

function App() {
  return (
    <section class="vh-100 gradient-custom">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-xl-10">
            <div class="card">
              <div class="card-body p-5">
                <TodoList />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
