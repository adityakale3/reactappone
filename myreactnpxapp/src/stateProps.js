import React, {Component} from 'react';
import ReactDOM from 'react-dom';



// // Props in Class
// class Student extends Component{
//     state = {
//         name : this.props.name,
//         email : this.props.email
//     }
//     render(){
//     return  (<React.Fragment>
//             <h1>Hi {this.state.name}</h1>
//             <p>Email : {this.state.email}</p>
//             </React.Fragment>);
//     }
// }


// OR WITH CONSTRUCTOR

// Props in Class
class Student extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : this.props.name,
            email : this.props.email,
            count : this.props.count
        };
        // No need to bind if click me is arrow function
        this.clickMe = this.clickMe.bind(this);
        // clickMe = () => {
        //     let count = this.state.count;
        //     this.setState({count : ++count})
        // }
    }

    clickMe(){
        let count = this.state.count;
        this.setState({count : ++count})
    }

    render(){
    return  (<React.Fragment>
            <h1>Hi {this.state.name}</h1>
            <p>Email : {this.state.email}</p>
            <p>Count : {this.state.count}</p>
            <button onClick={this.clickMe}>Add</button>
            </React.Fragment>);
    }
}




export default Student;