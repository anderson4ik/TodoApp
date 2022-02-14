import React from 'react';
import ReactDOM from 'react-dom';
import Todolist from "./components/todo-list";
import AppHeading from "./components/app-header";
import SearchPanel from "./components/search-panel";

const  App = () => {
    const isLoggedIn = true;
    const welcomeBox = <span>Hello dear friend!</span>
    const loginBox = <span>Login please:</span>
    return (
        <div>
            {isLoggedIn ? welcomeBox : loginBox}
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
