import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family.jsx';
import Member from './member.js';

ReactDOM.render(
        <Family lastName='Smith'>
            <Member name='Alan' />
            <Member name='Mary' />
            <Member name='Anna' />
        </Family>
, document.getElementById('app'));

