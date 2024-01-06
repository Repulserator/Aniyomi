import './App.css';
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Console } from './components/admin console/Console'
import { Login } from './components/Login'
import { Signup } from './components/Signup'
import { Main } from './components/Main'
import { Header } from './components/Header'
import { Video } from './components/Video'
import AllVideo from './components/AllVideo'
import { Loginad } from './components/Admin Login';
import Home from './components/Home';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

document.body.style.overflowX = "hidden";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Switch>
        <div>
          <div className="container">
            <Route path='/' component={Home} exact />
            <Route path='/home' component={Home} exact />
            <Route path='/login' component={Login} exact />
            <Route path='/main' component={Main} exact />
            <Route path='/signup' component={Signup} exact />
            <Route path='/video/:videoId' component={Video} exact />
            <Route path='/allvideo' component={AllVideo} exact />
            <Route path='/adminlog' component={Loginad} exact />
            <Route path='/bg' component={Loginad} exact />
            
          </div>
          <div>
            <Route path='/console' component={Console} exact />
          </div>
        </div>

      </Switch>
 


    </BrowserRouter>

  );
}

export default App;
