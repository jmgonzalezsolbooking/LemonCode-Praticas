import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AverageComponent } from './averageComponent';

ReactDOM.render(
 <div>
   <h1 class="red-background">Hello from React DOM</h1>
   <AverageComponent />
   <img src="./src/content/logo_1.png" height="100px" width="100px"></img>
 </div>,
 document.getElementById('root')
);