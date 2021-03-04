import React from 'react';


class Input extends React.Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
        this.onEnter = this.onEnter.bind(this);
    }

    onEnter(event) {
        if (event.key === 'Enter') {
            let val=this.input.current.value;

            if(val!=='') {
                this.props.action.add(val);
                this.input.current.value='';
            }
        }
    }

    render() {
        return (
            <div className="input__box">
                <button onClick={this.props.checkAll} className={"check-all "+((this.props.checked)?"check-all-actived":"")}></button>
                <input className="input" ref={this.input} onKeyUp={this.onEnter} type="text" placeholder="что нужно сделать?" />
            </div>
        )
    }
}

export default Input;