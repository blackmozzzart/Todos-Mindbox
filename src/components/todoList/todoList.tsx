import { TodoItem } from '../todoItem';
import './todoList.scss';

export const TodoList = () => {
    return (
        <div className='todo'>
            <ul className='todo__list'>
                <h2 className='todo__message'>{ }</h2>
                <TodoItem />
            </ul>
        </div>
    )
}