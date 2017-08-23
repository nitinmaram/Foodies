let React = require('react');
let {browserHistory} = require('react-router');

class Login extends React.Component {
  constructor() {
      super();
      this.state={username:'',password:'', isLoggedIn:''};
  }

handleUserName(e)
{
this.setState({username:e.target.value});
}
handlePassword(e)
{
this.setState({password:e.target.value});
}
registerUser(){
$.ajax({
 url:"/users/add",
 type: 'POST',
 datatype: 'JSON',
 data:{
   'username':this.state.username,
   'password':this.state.password
 },
 success: function(res){
   console.log(res.responseText);
   browserHistory.push('/');
 },
 error: function(err){
   // alert("Invalid username or password");
   browserHistory.push('/home');
   console.log(err.responseText);
 }
});
}
render(){
 return(
 <div>
      <h2 className="text-center">Login</h2>
      <div className="form-group">
      <input className="form-control" onChange={this.handleUserName.bind(this)}
      placeholder="Enter User Name"  type="text" />
      </div>
      <div className="form-group">
      <input className="form-control" onChange={this.handlePassword.bind(this)}
      placeholder="Enter Password"  type="password" />
      </div>
      <input className="btn btn-primary btn-block" onClick={this.registerUser.bind(this)}
      type="submit" value="Register" />
 </div>);
}
}

module.exports=Login;
