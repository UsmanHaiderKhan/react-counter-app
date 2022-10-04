import React, { Component } from 'react';
class Counter extends Component {
    state = { 
        count: 0,
        tags: ['tags']
     } 
     renderTags(){
        if(this.state.tags.length === 0) return <p>There is no tag.!</p>
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
        
     }
     handleIncrement = product => {
        console.log(product);
        this.setState({count: this.state.count + 1});
     }
    render() { 
        return (
        <div className="container">
            {this.state.tags.length === 0 && 'Please Create New Tags!'}
            <span className={this.getBadgeClasses()}>{this.formateCount()}</span>
            <button onClick={() => this.handleIncrement({id:1})} className='btn btn-outline-primary btn-sm'>Increment</button>
           {/* {this.renderTags()} */}
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