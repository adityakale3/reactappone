import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// Use React.Fragment insead of empty div

// Props in Class
class Student extends Component{
    render(){
    return  (<React.Fragment>
            <h1>Hi {this.props.name}</h1>
            <p>Email : {this.props.email}</p>
            </React.Fragment>);
    }
}


export default Student;