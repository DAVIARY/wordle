import WordleContainer from './components/WordleContainer'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import DrawBoard from './components/Board';
import Keyboard from './components/Keyboard';

const App = () =>{
  return(
    <Router>
      <WordleContainer />
    <Route path='/' component={DrawBoard} ></Route>  
    </Router>
  )
}

export default App;
