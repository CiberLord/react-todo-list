import React from 'react';


class Setting extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="setting">
                <div className="counter">задачи: {this.props.actived}</div>
                <button onClick={this.props.showAll} className={"setting-button "+((this.props.status==0)?"setting-active":"")}>Все</button>
                <button onClick={this.props.showActive} className={"setting-button "+((this.props.status==1)?"setting-active":"")}>Активные</button>
                <button onClick={this.props.showCompleted} className={"setting-button "+((this.props.status==2)?"setting-active":"")}>Завершенные</button>
                <button onClick={this.props.clearCompleted} className="setting-button">Очистить</button>
            </div>
        )
    }
}

export default Setting;