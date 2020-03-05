import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import HelloComponent from './component/HelloComponent';
import Login from './Login/login';

//const HelloWorld = () =>{
 //   return <p> ini adalah arrow function </p>
//}

//class Statefullcomponent extends React.Component
//{
  //  render(){
    //    return <p>ini adalah Statefull Component</p>
    //}
//}
ReactDOM.render(<Login />, document.getElementById('root'));
serviceWorker.unregister();
