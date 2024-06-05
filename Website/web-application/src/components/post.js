import React from 'react';
import Slider from 'react-slick';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/slick-theme.css';
import sampleImage1 from '../images/logo.jpg';
import sampleImage2 from '../images/sample2.jpg';
import sampleImage3 from '../images/sample3.jpg';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
      isImageLoaded: false,
    };

    this.images = [sampleImage1, sampleImage2, sampleImage3];
    this.preloadedImages = [];
  }

  componentDidMount() {
    this.preloadImages();
  }

  preloadImages() {
    this.images.forEach((image, index) => {
      const img = new Image();
      img.src = image;
      img.onload = () => {
        this.preloadedImages[index] = true;
        this.checkAllImagesLoaded();
      };
    });
  }

  checkAllImagesLoaded() {
    if (this.preloadedImages.length === this.images.length && this.preloadedImages.every(Boolean)) {
      this.setState({ isImageLoaded: true });
    }
  }

  openLightbox = (index) => {
    if (!this.state.isOpen) {
      console.log('Opening lightbox at index:', index);
      this.setState({ isOpen: true, photoIndex: index });
    } else {
      console.warn('Lightbox is already open.');
    }
  };

  closeLightbox = () => {
    if (this.state.isOpen) {
      console.log('Closing lightbox');
      this.setState({ isOpen: false });
    } else {
      console.warn('Lightbox is already closed.');
    }
  };

  moveNext = () => {
    this.setState((prevState) => ({
      photoIndex: (prevState.photoIndex + 1) % this.images.length,
    }), () => console.log('Moved to next image:', this.state.photoIndex));
  };

  movePrev = () => {
    this.setState((prevState) => ({
      photoIndex: (prevState.photoIndex + this.images.length - 1) % this.images.length,
    }), () => console.log('Moved to previous image:', this.state.photoIndex));
  };

  render() {
    const { photoIndex, isOpen, isImageLoaded } = this.state;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
    };

    return (
      <div className="post">
        <div className="post-header">
          <div className="post-title">АВТОКАДР_46 ДТП | ЧП | Аварии | Курска и области</div>
          <div className="post-time">36 минут назад</div>
        </div>
        <div className="post-body">
          <p>Добрый день)</p>
          <p>Есть ли у кого-нибудь запись видеорегистратора момента ДТП в Москве, 4 июня, время около 8-8:30</p>
          <Slider {...settings}>
            {this.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="post-image"
                  onClick={() => this.openLightbox(index)}
                />
              </div>
            ))}
          </Slider>

          {isOpen && isImageLoaded && (
            <Lightbox
              mainSrc={this.images[photoIndex]}
              nextSrc={this.images[(photoIndex + 1) % this.images.length]}
              prevSrc={this.images[(photoIndex + this.images.length - 1) % this.images.length]}
              onCloseRequest={this.closeLightbox}
              onMovePrevRequest={this.movePrev}
              onMoveNextRequest={this.moveNext}
              imageLoadErrorMessage="Image failed to load"
              enableZoom={true}
              animationDisabled={true}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Post;