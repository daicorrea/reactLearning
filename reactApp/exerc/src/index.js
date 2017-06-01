import React from 'react';
import ReactDOM from 'react-dom';
import { First, Second } from './component';

//import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import './index.css';*/

/*ReactDOM.render(<App />, document.getElementById('root'));
*/

ReactDOM.render(
    <div>
        <First />
        <Second />
    </div>
, document.getElementById('app'));
registerServiceWorker();
console.log("Funcionou");

