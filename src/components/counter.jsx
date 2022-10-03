import React, { Component } from 'react';
class Counter extends Component {
    state = { 
        count: 1,
     } 
    render() { 
        return (
        <div className="container">
            <span className={this.getBadgeClasses()}>{this.formateCount()}</span>
            <button className='btn btn-outline-primary btn-sm'>Increment</button>
        </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += this.state.count === 0 ? 'warning' : 'primary';
        return classes;
    }

    formateCount(){
        const {count} = this.state;
        return count === 0 ? 'Zero': count;
    }
}
 
export default Counter;