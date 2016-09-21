import React from 'react';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.Img=this.Img.bind(this);
    }
   Img(imageUrl) {
    return (
      <div>
        <img src={imageUrl} />
      </div>
    );
  }
 
  render() {
    return (
      <div>
          
          <p>{this.props.imageurls}</p>
          
      </div>
    );
  }
}


export default Gallery;

