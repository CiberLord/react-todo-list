import React from 'react';


class Setting extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="setting">
                <div className="counter">задачи: {this.props.actived}</div>
                <button onClick={this.props.showAll} className="setting-button">Все</button>
                <button onClick={this.props.showActive} className="setting-button">Активные</button>
                <button onClick={this.props.showCompleted} className="setting-button">Завершенные</button>
                <button onClick={this.props.clearCompleted} className="setting-button">Очистить</button>
            </div>
        )
    }
}

export default Setting;