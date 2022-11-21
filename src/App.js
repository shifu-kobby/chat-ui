import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import LogIn from './components/log-in/LogIn';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Navigate to="/login" />} />
          <Route exact path="/homepage" element={<Home />}/>
          <Route exact path="/login" element={<LogIn />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
