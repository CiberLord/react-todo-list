import React from 'react';
import Input from './Input.jsx';
import List from './List.jsx';
import Setting from './Setting.jsx';


class ToDo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todoList: [],
            counter:0,
            actived: 0,
            showStatus: 0, //0 - показать все, 1- показать только активные, 2 - показать только не активные
            checked:false
        }

        this.addItem = this.addItem.bind(this);
        this.selectAll = this.selectAll.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
        this.oncheck=this.oncheck.bind(this);
        this.checkAll=this.checkAll.bind(this);
        this.showAll=this.showAll.bind(this);
        this.showActive=this.showActive.bind(this);
        this.showCompleted=this.showCompleted.bind(this);
        this.clearCompleted=this.clearCompleted.bind(this);
    }

    selectAll() {
        console.log("while nothing");
    }
    addItem(value) {
        let newlist=this.state.todoList.slice();
        newlist.push({
            value: value,
            ischeck:false
        });
        this.setState({
            todoList: newlist,
            counter:this.state.counter+1,
            actived: this.state.actived+1
        });
    }
    deleteItem(index){
        let newlist=this.state.todoList.slice();
        newlist.splice(index,1);
        this.setState({
            todoList:newlist,
            counter:this.state.counter-1,
            actived: this.state.actived-1
        })
    }
    oncheck(index){
        let newlist=this.state.todoList.slice();
        let active=this.state.actived;
        if(!newlist[index].ischeck){
            newlist[index].ischeck=true;
            active--;
        }else{
            newlist[index].ischeck=false;
            active++;
        }
        this.setState({
            todoList:newlist,
            actived: active
        })
    }
    checkAll(){
        let newlist=this.state.todoList.slice();
        let acive=this.state.actived;
        if(!this.state.checked){
            newlist.forEach(item => {
                item.ischeck=true;
            });
            acive=0;
        }else{
            newlist.forEach(item => {
                item.ischeck=false;
            });
        }
        this.setState({
            todoList:newlist,
            actived: acive,
            checked: !this.state.checked
        })
    }
    showAll(){
        console.log("all");
        this.setState({
            showStatus:0
        })
    }
    showActive(){
        console.log("act");
        this.setState({
            showStatus:1
        })
    }
    showCompleted(){
        console.log("comp");
        this.setState({
            showStatus:2
        })
    }
    clearCompleted(){
        let newlist=[]
        for(let e of this.state.todoList){
            if(!e.ischeck){
                newlist.push({value:e.value,ischeck:false});
            }
        }
        this.setState({
            todoList: newlist
        })
    }

    render() {
        let input = {
            add: this.addItem,
            select: this.selectAll
        };
        return (
            <div className="todo__box">
                <Input checkAll={this.checkAll} action={input} checked={this.state.checked}/>
                <List items={this.state.todoList} delete={this.deleteItem} oncheck={this.oncheck} status={this.state.showStatus}/>
                {
                    (this.state.todoList.length>0)?
                        <Setting actived={this.state.actived} 
                            showAll={this.showAll}
                            showCompleted={this.showCompleted}
                            showActive={this.showActive}
                            clearCompleted={this.clearCompleted}
                            status={this.state.showStatus}
                        />:""
                }
            </div>
        )
    }
}
export default ToDo;