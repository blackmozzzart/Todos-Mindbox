export const ADD_TODO = 'ADD_TODO';
export const CHANGE_TODO = 'CHANGE_TODO';

interface IAddTodoAction {
    type: typeof ADD_TODO;
    text: string;
}

interface IChangeTodoAction {
    type: typeof CHANGE_TODO;
    text: string;
}

export type TAddTodoActionTypes =
    | IAddTodoAction
    | IChangeTodoAction

export const addTodo = (text: string): IAddTodoAction => ({
    type: ADD_TODO,
    text
});

export const changeTodo = (text: string): IChangeTodoAction => ({
    type: CHANGE_TODO,
    text
})