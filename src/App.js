import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PostDetails from "./pages/post/PostDetails";
import CreatePost from "./pages/createpost/CreatePost";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  const user = false;
  return (
    <div className="App">
      <Router>
      <TopBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/post-details">
            <PostDetails />
          </Route>
          <Route path="/create-post">
            { user? <CreatePost/> : <Register /> }
          </Route>
          <Route path="/settings">
            { user? <Settings/> : <Register /> }
          </Route>
          <Route path="/login">
            { user? <Home/> : <Login /> }
          </Route>
          <Route path="/register">
            { user? <Home/> : <Register /> }
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
