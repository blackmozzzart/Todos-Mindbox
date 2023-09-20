import './todoTools.scss';

export const TodoTools = () => {
    return (
        <div className='tools'>
            <p className='tools__info'>{ }</p>
            <div className='tools__buttons'>
                <button
                    aria-label='All'
                    // onClick={handleClickView}
                    className={`tools__button`}
                >
                    All
                </button>
                <button
                    aria-label='Active'
                    // onClick={handleClickView}
                    className={`tools__button`}
                >
                    Active
                </button>
                <button
                    aria-label='Completed'
                    // onClick={handleClickView}
                    className={`tools__button`}
                >
                    Completed
                </button>
            </div>
            <div className='tools__clear'>
                <button
                    aria-label='clear'
                    // onClick={handleClearCompleted}
                    className='tools__button'
                >
                    Clear Completed
                </button>
            </div>
        </div>
    )
}