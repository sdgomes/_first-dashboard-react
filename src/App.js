import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components

import Navigation from './components/Navigation';
import NavigationAside from './components/NavigationAside';

function App() {
  return (
    <div className="App">
      <NavigationAside />
      <Navigation />
      <div className="main-container">
        <div className="row text-center">
          <div className="col-12 bg-primary">1</div>
          <div className="col-12 bg-dark">2</div>
          <div className="col-5 bg-success">3</div>
          <div className="col-3 bg-danger">4</div>
          <div className="col-4 bg-warning">5</div>
          <div className="col-7 bg-info">6</div>
          <div className="col-5 bg-light">7</div>
        </div>
      </div>
    </div>
  );
}

export default App;


// function App(props) {
//   return (
//     <div className="App">
//       hello world!
//     </div>
//   );
// }

// class App extends Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <div className="App">
//         hello world!
//       </div>
//     );
//   }
// }

// const App = props => {
//   return (
//     <div>
//       hello world!
//     </div>
//   );
// }