import './App.scss';
import { AddTodo } from './components/addTodo/addTodo'
import { TodoList } from './components/todoList'
import { TodoTools } from './components/todoTools';

function App() {

  return (
    <main className='app'>
      <section className='content'>
        <h1 className='title'>todos</h1>
        <div className='container'>
          <div className='components'>
            <AddTodo />
            <TodoList />
            <TodoTools />
          </div>
          <div className='overlay_container'>
            <div className='overlay' />
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
