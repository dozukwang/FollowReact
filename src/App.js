import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FollowCss from './component/forCss/FollowCss';
import FollowJs from './component/forJs/FollowJs';
import Nav from './component/Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/css" element={<FollowCss name={'빵구'}/>} />
          <Route path="/js" element={<FollowJs/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
