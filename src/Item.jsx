import React from 'react';


class Item extends React.Component {
    constructor(props) {
        super(props);

        this.delete = this.delete.bind(this);
        this.check=this.check.bind(this);
    }


    delete(event) {
        this.props.delete(this.props.index);
    }
    check(event){
        this.props.oncheck(this.props.index);
    }

    render() {
        let visible=true;
        if(this.props.status===0){
            visible=true; //нада показать все задачи
        }
        if(this.props.status===1){
            if(this.props.isCheck) visible=false; //нада показать только активные
        }
        if(this.props.status===2){
            if(!this.props.isCheck) visible=false; //надо показать только завершенные
        }
        return (visible&&
            <div className="item">
                <button onClick={this.check} className="checkbox" style={((this.props.isCheck)?{backgroundImage:'url(../public/checked.svg)'}:{backgroundImage: 'none'})}></button>
                <p style={((this.props.isCheck)?{opacity:"0.5"}:{opacity:"1"})}  className="item__text">{this.props.value}</p>
                <button onClick={this.delete} className="item-delete"></button>
            </div>)
    }

}

export default Item;