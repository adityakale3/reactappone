import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// Props in Function
// function Student(props){
// return  (<div>
//         <h1>Hi {props.name}</h1>
//         <p>Email : {props.email}</p>
//         </div>);
// }

// Props in Class
class Student extends Component{
    render(){
    return  (<div>
            <h1>Hi {this.props.name}</h1>
            <p>Email : {this.props.email}</p>
            </div>);
    }
}


// Alternatively Values can be set using
Student.defaultProps= {
    name : "Username",
    email : "Example@example.com"
}
export default Student;