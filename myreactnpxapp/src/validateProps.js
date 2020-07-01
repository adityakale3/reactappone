import React, {Component} from 'react';
import ppt from 'prop-types';

// Props in Class
class Student extends Component{
    render(){
    return  (<div>
            <h1>Hi {this.props.name}</h1>
            <p>Email : {this.props.email}</p>
            </div>);
    }
}

Student.propTypes = {
    name : ppt.string.isRequired
}

export default Student;