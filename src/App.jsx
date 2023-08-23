import './App.css';
import Nav from './components/Nav/Nav.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import TopicList from './components/TopicList/TopicList.jsx';
import Post from './components/Post/Post.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/topics' element={<TopicList />} />
          <Route path='/post/:id' element={<Post />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
