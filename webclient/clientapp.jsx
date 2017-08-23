var React = require('react');
var ReactDOM = require('react-dom');
import { Header,Icon, Button} from 'semantic-ui-react';
var {browserHistory, Route, Router, IndexRoute} = require('react-router');
var GmailBox = require('./components/GmailBox.jsx');
var NavBar = require('./components/NavBar.jsx');
var About = require('./components/About.jsx');
var Home = require('./components/clientapp.jsx');
var fav = require('./components/favourites.jsx');
var Register = require('./components/sample/register.jsx');
import Login from './components/sample/login.jsx'
var MainComp = React.createClass({
render:function(){
    return(
      <div>
      <Header as='h5' icon color='orange' textAlign='center'><Icon name='cocktail' circular />Foodies</Header>
      <NavBar/>
      <br/><br/><br/><br/>
        {this.props.children}
      </div>
    );
  }
})
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Login}/>
    <Route  component={MainComp}>
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/gmailbox" component={GmailBox}/>
                <Route path="/fav" component={fav}/>
                </Route>
  </Router>,document.getElementById('mountapp'));
