import React from 'react';

class App extends React.Component {
   render() {            //render is used to process and display html
   	  var mystyle={      
       color:"red",
       fontSize:60
   	  }
      var value=1;
      return (
         <div>
            <p>hello lets begin!!</p>          
            {/*what is the use of attribute data-**/}
            <p data-value="answer">{1+1}</p>   
            {/*{} are used to process javascript in html*/}
            <p style={mystyle}>{value==1?'if yes':'if no'}</p>
            <Test value={"properties"}/> 
            <p>{this.props.name}</p>
         </div>
      );
   }
}

App.defaultProps = {
	name:"swastik"
}

class Test extends React.Component{
     
    // getInitialState()  -> could we use this instead of using an constructor,getting an error though
     constructor()
     {
         super();
         this.state={checked:true};
         
     }

     handleChecked(){
     	this.setState({checked: this.state.checked});
     }

     render() {
     	var msg;
     	if(this.state.checked)
     	  {
     		msg="checked";
     	  }else 
     	  {
     	  	msg="not checked";
          } 
     	return(
     		  <div>
     		      <p>wooh... other component</p>
     		      <input type="checkbox" onChange={this.handleChecked} defaultChecked={this.state.checked}/>
     		      <p>{msg}</p>
     		      <p>{this.props.value}</p>
     		  </div>
     		  );
     }

}


export default App;
