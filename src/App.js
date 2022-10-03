// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './Components/MenuComponent';
import  {DISHES} from './Shared/dishes'
import Main from './Components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { ConfigureStore } from './Redux/configureStore';
import { Provider } from 'react-redux';
var elem = (<h1> hello world </h1>);
const store = ConfigureStore();

class App extends Component {
  render(){
    return (
      <Provider store={store}>  
        <BrowserRouter>  
          <div >
            <Main />
          </div>
        </BrowserRouter>
      </Provider>

    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
