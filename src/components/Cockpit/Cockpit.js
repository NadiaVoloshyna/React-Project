import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
const toggleBtnRef = useRef(null);

useEffect(() => {
console.log('[Cockpit.js] useEffect');
// setTimeout(() => {
// alert('Saved data to the cloud!')
// }, 1000);
toggleBtnRef.current.click();
    }, []);

const assignedClasses = [];
let btnClass = '';
if(props.showPersons) {
btnClass = classes.Red;
}

if(props.personsLength <=2) {
      assignedClasses.push(classes.red);
}
if(props.personsLength <=1) {
      assignedClasses.push(classes.bold);
}

return (
<div className={classes.Cockpit}>
<h1>{props.title}</h1>
<p className={assignedClasses.join(' ')}>This is really working!</p>
<button 
ref={toggleBtnRef}
className={btnClass}
onClick={props.toggle}>Toggle Persons</button>
<AuthContext.Consumer>
      {(context) => <button onClick={context.login}>Log in</button>}
</AuthContext.Consumer>
</div>
);

};

export default React.memo(Cockpit);


