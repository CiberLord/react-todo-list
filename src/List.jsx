import React from 'react';
import Item from './Item.jsx';


class List extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const list=this.props.items.map((item,index)=>
            <Item key={item.toString()} index={index} value={item.value} isCheck={item.ischeck} delete={this.props.delete} oncheck={this.props.oncheck} status={this.props.status}/>
        );
        return (
            <div className="list">
                {list}
            </div>
        )
    }
}

export default List;