import logo from './logo.svg';
import './App.css';
import BlogNav from './BlogNav';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import AddBlog from './AddBlog';

function App() {
  return (
    <div className="App">
      <BlogNav/>
     <Routes>
     <Route path='/home' element={<Home/>} />
      <Route path='/' element={<AddBlog/>} />
     
     </Routes>
     
    </div>
  );
}

export default App;
