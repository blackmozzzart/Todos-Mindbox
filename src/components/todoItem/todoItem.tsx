import './todoItem.scss';

export const TodoItem = () => {
    return (
        <li className='todo__list-item'>
            <button
                aria-label='check'
                className='todo__button'
            />
            <p className='todo__text'>{ }</p>
        </li>
    )
}