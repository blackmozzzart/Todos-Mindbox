import { ChangeEvent, FormEvent } from 'react';
import './addTodo.scss';
import { addTodo, changeTodo } from '../../services/actions/add-todo';
import { store } from '../../services/store';

export const AddTodo = () => {
    const [state, dispatch] = store;
    const { todoText } = state;

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const text = e.target.value;
        changeTodo(text)
    }

    function onSubmit(e: FormEvent) {
        e.preventDefault();
        addTodo(dispatch)
        changeTodo('')
    }

    return (
        <form className='form' onSubmit={onSubmit}>
            <button
                type='submit'
                aria-label='submit'
                className='form__button'
            />
            <input
                type='text'
                placeholder='What needs to be done?'
                className='form__input'
                onChange={handleChange}
                value={todoText}
                required
            />
        </form>
    )
}