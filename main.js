import './style.css'
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg'
import { BreakingbadApp } from './src/breakingbad/breaking-bad-app';
import { UsersApp } from './src/users/users-app';


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 id="app-title">Hello Vite!</h1>
    <div class="card">
      
    </div>

  </div>
`


const card = document.querySelector('.card');

// BreakingbadApp(card);
UsersApp(card);


