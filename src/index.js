import React from 'react';
import ReactDOM from 'react-dom';

const Todolist = () => {
    return (
        <ul>
            <li>Learn React.</li>
            <li>To be a ninja of React.</li>
        </ul>
    );
}

const AppHeading = () => {
    return <h1>Todo List</h1>
}

const SearchPanel = () => {
    return <input placeholder='search'/>
}

const  App = () => {
    return (
        <div>
            <AppHeading />
            <SearchPanel />
            <Todolist />
        </div>
    );
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
