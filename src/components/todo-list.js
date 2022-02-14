import React from 'react';
import TodoListItem from "./todo-list-item";

const Todolist = () => {
    const items = ['Learn React.', 'To be a ninja of React.'];
    return (
        <ul>
            {items.map((item, index) => {
                return <TodoListItem
                    item={item}
                    key={index}
                />;
            })}
        </ul>
    );
}

export default Todolist;
