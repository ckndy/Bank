import React from 'react';
import ReactDOM from 'react-dom';

import PiggyBank from './components/PiggyBank';

window.onload = function(){
  ReactDOM.render(
    <PiggyBank title="Big Al's Wealth Management" owner="Chris Kennedy"/>,
    document.getElementById('app')
  );
}
