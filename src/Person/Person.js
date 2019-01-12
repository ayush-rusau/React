import React from 'react';

const person = ( props ) => {
    return (
        <div>
            <p>I'm a {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;

//When using class-based component
//class Person extends Component {
//     render() {
//         return <p>My name is {this.props}</p> ;
//     }
// }