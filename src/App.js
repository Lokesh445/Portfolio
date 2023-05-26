import logo from './logo.svg';
import './App.css';
import Congrats from './component/task2/task2';
import SuperLeague from './component/task3/task3';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Social from './component/task4/task4';
import Collection from './component/task5/collection'
import {Login} from './component/task6/login'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import { Route1 } from './component/router/route';
import Card from './component/task7/card';
import {Hooks} from './component/task8/hooks';
import {Fruits} from './component/task9/fruits'
import Feedback from './component/task10/thankscard'
import FeedNext from './component/task10/message'
import {Mydata} from './component/json/index'
import {Project} from './component/fetchdb/fetchdb'
import { PortHome } from './component/portfolio/home';
import { PortNav } from './component/portfolio/portnav';
import { PortAbout } from './component/portfolio/about';
import { Skills } from './component/portfolio/skills';
import {Certificate} from './component/portfolio/certification';
import { Education } from './component/portfolio/education';
function App() {
  return (
    <>
   
      <BrowserRouter>
        <Routes>
          <Route path='/' element={[<PortNav/>,<PortHome/>,<PortAbout/>,<Skills/>,<Certificate/>,<Education/>]}></Route>
          <Route path='/task1' element={[<Route1/>,<Congrats/>]}></Route>
          <Route path='/task2' element={[<Route1/>,<SuperLeague/>]}></Route>
          <Route path='/task3' element={[<Route1/>,<Social/>]}></Route>
          <Route path='/task4' element={[<Route1/>,<Collection/>]}></Route>
          <Route path='/task5' element={[<Route1/>,<Login/>]}></Route>
          <Route path='/task6' element={[<Route1/>,<Card/>]}></Route>
          <Route path='/task7' element={[<Route1/>,<Hooks/>]}></Route>
          <Route path='/task8' element={[<Route1/>,<Fruits/>]}></Route>
          <Route path='/task9' element={[<Route1/>,<Feedback/>]}></Route>
          <Route path='/task9.1' element={[<FeedNext/>]}></Route>
          <Route path='/fetch' element={[<Route1/>,<Mydata/>]}></Route>
          <Route path='/engcollege' element={[<Route1/>,<Project/>]}></Route>
          {/* <Route path='/userlist' element={[<Route1/>,<UserList/>]}></Route>
          <Route path='/register' element={[<Route1/>,<Register/>]}></Route> */}
          {/* <Route path="/Portfolio" element={[<PortNav/>,<PortHome/>,<PortAbout/>,<Skills/>,<Certificate/>,<Education/>]}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
