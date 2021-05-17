import { Switch, Route, Redirect } from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Project from './pages/Project'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/project" component={Project} />
      <Route exact path="/contact" component={Contact} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
