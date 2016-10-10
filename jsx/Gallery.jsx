/*import React from 'react';
//import injectTapEventPlugin from 'react-tap-event-plugin'; // just because onClick is not fast enough 
// above is not required now
class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.Img=this.Img.bind(this);
    //this.cal=this.cal.bind(this);
  } 
  
  Img(imageUrl) {
    return (
      <div>
	    <img src={imageUrl} />
	    {console.log(imageUrl)}
	  </div>
	);
  }

 
  render() {
    var urls = [
      'http://mochadad.com/wp-content/uploads/2015/12/gym.jpg',
    ];
    return (
      <div>
        {urls.map(this.Img)}
      </div>
    );
  }
}

export default Gallery;*/
import React from 'react';

import ImageGallery from 'react-image-gallery';

class MyComponent extends React.Component {

  handleImageLoad(event) {
    console.log("")
  }

  render() {

    const images = [
      {
        original: 'http://www.kaylainthecity.com/wp-content/uploads/gym.jpg',
        thumbnail: 'http://www.kaylainthecity.com/wp-content/uploads/gym.jpg',
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb',
        originalAlt: 'original-alt',
        thumbnailAlt: 'thumbnail-alt',
        thumbnailLabel: 'Optional',
        description: 'Optional description...',
        //srcSet: 'Optional srcset'// (responsive images src)',
        sizes: 'Optional sizes'// (image sizes relative to the breakpoint)'
      },
      {
        original: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Gym_wiki.jpg',
       thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Gym_wiki.jpg'
      },
     /* {
        original: 'https://www.google.co.in/search?q=gym+images&biw=1366&bih=631&noj=1&source=lnms&tbm=isch&sa=X&ved=0ahUKEwie8p_BhrXPAhUBKY8KHfz2AV4Q_AUICCgB#imgdii=JBBu-5s9IkLylM%3A%3BJBBu-5s9IkLylM%3A%3BPFdOarVDQtiEpM%3A&imgrc=JBBu-5s9IkLylM%3A',
       // thumbnail: 'https://www.google.co.in/search?q=gym+images&biw=1366&bih=631&noj=1&source=lnms&tbm=isch&sa=X&ved=0ahUKEwie8p_BhrXPAhUBKY8KHfz2AV4Q_AUICCgB#imgdii=JBBu-5s9IkLylM%3A%3BJBBu-5s9IkLylM%3A%3BPFdOarVDQtiEpM%3A&imgrc=JBBu-5s9IkLylM%3A'
      }*/
    ]

    return (
    	<div>
		     <ImageGallery
		        ref={i => this._imageGallery = i}
		        items={images}
		        slideInterval={2000}
		        onImageLoad={this.handleImageLoad}/>
              {/*<p>{this.props.children}</p>*/}
		</div>        
    );
  }

}

export default MyComponent;

