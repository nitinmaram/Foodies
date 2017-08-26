import React, {Component} from 'react'
import {Input, Menu, Segment, Button, Header, Icon} from 'semantic-ui-react'
var {Link} = require('react-router');

class MenuExamplePointing extends Component {
   state = {
       activeItem: 'home'
   }

   handleItemClick = (e, {name}) => this.setState({activeItem: name})
   onClick(){

    $.ajax({
        url: '/users/logout',
        type: 'GET',
        success: function(data) {
          if (typeof data.redirect == 'string')
           window.location.replace(window.location.protocol + "//" + window.location.host + data.redirect);
        }.bind(this),
        error: function(err) {
            console.log('error in logout'+err);
        }.bind(this)
    });
  }

   render() {
       const {activeItem} = this.state

       return (
           <div>
               <Menu secondary unstackable>
                   <Link to='/home'>
                       <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
                       <Header as='h5' icon color='orange' textAlign='center'><Icon name='cocktail'/>Foodies</Header>
                       </Menu.Item>
                   </Link>
                   <Menu.Item/>
                   <Link to='/fav'>
                       <Menu.Item name='favourites' active={activeItem === 'favourites'} onClick={this.handleItemClick}>
                       <Header as='h5'icon color='red' textAlign='center'><Icon name='heart'/>Favourites</Header>
                       </Menu.Item>
                   </Link>
                   <Menu.Menu position='right'>
                       <Menu.Item>
                           <Button  size='large' color='red' onClick={this.onClick.bind(this)}>Logout</Button>
                       </Menu.Item>
                   </Menu.Menu>
               </Menu>
           </div>
       )
   }
}
module.exports = MenuExamplePointing;
