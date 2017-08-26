let React = require('react');
import { Button, Form, Header, Grid, Icon, Container} from 'semantic-ui-react';
const ReactToastr = require('react-toastr');
const {ToastContainer} = ReactToastr;
const ToastMessageFactory = React.createFactory(ReactToastr.ToastMessage.animation);
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
    this.loginAlert = this.loginAlert.bind(this);
    this.registerAlert = this.registerAlert.bind(this);
    this.registerSuccessAlert = this.registerSuccessAlert.bind(this);
  }
handleUserName(e)
{
this.setState({username:e.target.value});
}
handlePassword(e)
{
this.setState({password:e.target.value});
}
loginAlert() {
  this.refs.container.error('Invalid User Name/ Password', '', {
    timeOut: 1000,
    extendedTimeOut: 10000
  });
}
registerAlert() {
  this.refs.container.error('Provide valid details', '', {
    timeOut: 1000,
    extendedTimeOut: 10000
  });
}
registerSuccessAlert() {
  this.refs.container.success('Successfully Registered', '', {
    timeOut: 3000,
    extendedTimeOut: 1000
  });
}
LoginUser(){
  let context = this
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
   context.loginAlert();
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
   context.setState({heading: '', reg: false, log: false
 });
  context.registerSuccessAlert();
  setTimeout(function() { browserHistory.push('/home'); }.bind(this), 2000);
 },
 error: function(err){
   this.setState({heading: '', reg: false, log: false});
   context.registerAlert();
   console.log(err.responseText);
 }
});
}
else{
  context.registerAlert();
}
}

}
render(){
 return(
   <div>
 <Container>
 <Grid centered columns={2}>
  <Grid.Column>
  <Header as='h1' icon color='orange'><Icon name='cocktail' circular />Foodies</Header>
  <Header as='h3' color='grey'>{this.state.heading}</Header>
  <br/>
      <Form>
   <Form.Group widths={2}>
     <Form.Input placeholder='User Name' onChange={this.handleUserName.bind(this)} />
     <Form.Input placeholder='Password' onChange={this.handlePassword.bind(this)} type="password" />
   </Form.Group>
   </Form>
   <Button disabled ={this.state.log} onClick={this.LoginUser.bind(this)}>Login</Button>
   <Button onClick={this.registerUser.bind(this)}>Register</Button>
   </Grid.Column>
 </Grid>
 <ToastContainer ref='container' toastMessageFactory={ToastMessageFactory} className='toast-top-center'/>
 </Container>
</div>
);
}
}

module.exports=Login;
