import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/homepage" element={<Home />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
