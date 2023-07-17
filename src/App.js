
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Home from '../src/Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './NoMatch/NoMatch';
import PostDetail from './PostDetail/PostDetail';

function App() {
 
  return (
    <Router>
      <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/post/:postId' element={<PostDetail/>}/>
      <Route exact path='/' element={<Home/>} />
      <Route path='/*' element={<NoMatch/>} />
      </Routes>
    </Router>
    
    
    
  );
}

export default App;
