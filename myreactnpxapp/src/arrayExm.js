import React, {Component} from 'react';
import ReactDOM from 'react-dom';


// Props in Class
class Student extends Component{
        state = {
            users : ["Athu","Aditya","Aman","Goddy","Anu"]
        };
    render(){
    return  (<>
            <ul>
                {this.state.users.map((user,index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>
            </>);
    }

}


export default Student;