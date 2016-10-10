import React from 'react';
import MyComponent from './jsx/Gallery.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme'; // what does this library do
import RaisedButton from 'material-ui/RaisedButton';
import {green500} from 'material-ui/styles/colors';
import {lightBlue500} from 'material-ui/styles/colors';
import {green100} from 'material-ui/styles/colors';
import * as colors from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router';


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green500,
    primary2Color: lightBlue500,
    primary3Color: green100,
  } ,
  AppBar:{
    height:50,
  },
});

class App extends React.Component {
  constructor(){
    super();
  }
  getInitialState() {
    return {
      val : {}        
    },
 
  _getdata(x) {
    this.state.val = this.x;
    this.setState (
      { val : this.state.val
        }
    ); 
  },

  render() {            //render is used to process and display html
    var mystyle={      
       color:"red",
       fontSize:60
   	  }
      var value=1;
      return (
        <MuiThemeProvider muiTheme={muiTheme}>
          
          <div>
           
            <AppBar title="My AppBar"> 
           
              <p>hello lets begin!!</p>  
           
            </AppBar>        
           
            {/*what is the use of attribute data-**/}
            <p data-value="answer">{1+1}</p>   
            {/*{} are used to process javascript in html*/}
            <p style={mystyle}>{value==1?'if yes':'if no'}</p>  {/*inline styling */}
            <Test value={this._getdata}/> 
            {/*<p>{this.props.name}</p>*/}
            <Link to="Path1"><RaisedButton label="default"/></Link>
          
          </div>
        
        </MuiThemeProvider>
      );
   }
}

App.defaultProps = {
  name:"swastik"
}

class Test extends React.Component{
     
  // getInitialState()  -> could we use this instead of using an constructor,getting an error though
  constructor() {
    super();
    this.state = {   
      checked:true,
      name: "teranaam"
    };

    
    // var that = this;  // why is this not working
    this.handleChecked = this.handleChecked.bind(this);  //bind is required beacuse of clashing of object oriented feature of js with functional oriented
    this.storedata = this.storedata.bind(this);
  }
     

  handleChecked() {
    this.setState({checked: !this.state.checked});
  }

  storedata(event) {
    event.preventDefault(); // this is to avoid forms default props

    var x={
      name : this.refs.fullname.value,
      answerbody : this.refs.answer.value
    }  

      this.props._getdata(x);

      this.refs.forms.reset();
  }
  


  render() {
    var msg;
    if(this.state.checked) {
     	msg = "checked";
    } else { 
   	    msg = "not checked";
      } 
   	return(
   		<div>
		    
        <p>wooh... other component</p>
		    <input type="checkbox" onChange={this.handleChecked} defaultChecked={this.state.checked}/>
		    <p>{msg}</p>
        
        <form ref="forms" onSubmit={this.storedata}>
          
          <input type="text" ref="fullname" placeholder="name goes here">
		      <textarea ref="answer" placeholder="what you want?">
        
        </form>  
        
        <p>{this.props.value}</p>
        <p>{JSON.stringify(this.state,null,8)}</p>  {/*json space is not working why?*/}
        
        {/*<MyComponent value="val"/>*/}
        
        {console.log(JSON.stringify({a : 2}, null, 2))} {/*this works perfectly*/}
 		 
      </div>
   	);
  }

}

export default App;

//_functname is used to refer that function is not predefined instead is an user defined function

//ref is used in place of an id to identify an attribute "reacty" lol