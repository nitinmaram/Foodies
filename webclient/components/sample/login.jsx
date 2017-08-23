let React = require('react');
import { Button, Form, Header, Grid, Icon} from 'semantic-ui-react';
let {browserHistory} = require('react-router');

class Login extends React.Component {
  constructor() {
      super();
      this.state={username:'',password:'',
      isLoggedIn:'',
      heading: '',
      reg: false,
      log: false
    };
  }

handleUserName(e)
{
this.setState({username:e.target.value});
}
handlePassword(e)
{
this.setState({password:e.target.value});
}
LoginUser(){
$.ajax({
 url:"/users/login",
 type: 'POST',
 datatype: 'JSON',
 data:{
   'username':this.state.username,
   'password':this.state.password
 },
 success: function(res){

   console.log(res.responseText);
   if(res.responseText == "authenticated")
   browserHistory.push('/home');
   else
   browserHistory.push('/home');
 },
 error: function(err){
  alert("Invalid username or password");
   browserHistory.push('/');
   console.log(err.responseText);
 }
});
}
registerUser(){
  this.setState({heading: 'Register', reg: true, log: true});
  if(this.state.reg)
  {
    let context = this
    if(this.state.username !='' && this.state.password != ''){
$.ajax({
 url:"/users/add",
 type: 'POST',
 datatype: 'JSON',
 data:{
   'username':this.state.username,
   'password':this.state.password
 },
 success: function(res){
   context.setState({heading: '', reg: false, log: false, username: ''
 });
   browserHistory.push('/home');
 },
 error: function(err){
   this.setState({heading: '', reg: false, log: false});
   browserHistory.push('/');
   console.log(err.responseText);
 }
});
}
else{
  alert('Provide valid details')
}
}

}
render(){
 return(
 <div>
 <Grid centered columns={2}>
  <Grid.Column>
  <Header as='h1' icon color='orange'><Icon name='cocktail' circular />Foodies</Header>
  <Header as='h3' color='grey'>{this.state.heading}</Header>
  <br/>
      <Form>
   <Form.Group unstackable widths={2}>
     <Form.Input placeholder='User Name' onChange={this.handleUserName.bind(this)} />
     <Form.Input placeholder='Password' onChange={this.handlePassword.bind(this)} type="password" />
   </Form.Group>
   </Form>
   <Button disabled ={this.state.log} onClick={this.LoginUser.bind(this)}>Login</Button>
   <Button onClick={this.registerUser.bind(this)}>Register</Button>
   </Grid.Column>

 </Grid>
 </div>);
}
}

module.exports=Login;
