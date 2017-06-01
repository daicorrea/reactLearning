import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family';
import Member from './member.js';

ReactDOM.render(
    <Family>
        <Member name='Alan' lastName='Smith' />
    </Family>
, document.getElementById('app'));

