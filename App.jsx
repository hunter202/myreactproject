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
            <Test /> 
         </div>
      );
   }
}

class Test extends React.Component{
     render() {
     	return(
     		  <div>
     		      <p>wooh... other component</p>
     		  </div>
     		  );
     }

}


export default App;
