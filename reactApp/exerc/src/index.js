import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family';
import Member from './member.js';

ReactDOM.render(
        <Family lastName='Smith'>
            <Member name='Alan' />
        </Family>
, document.getElementById('app'));

