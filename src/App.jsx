import React from 'react';
import ToDo from './ToDo.jsx';


class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="app">
                <h1 className="app__title">
                    todo list
                </h1>
                <ToDo />
                <div className="info">
                    
                    <p>простой TODO список для демонстрации</p>
                </div>
            </div>
        )
    }
}

export default App;