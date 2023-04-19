import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import info from '../carouselInfo.json';
// import data from '../data.json';

function Carousel({
  containerBackgroundColor,
  descriptionBackgroundColor,
  buttonColor,
  imageHeadingColor,
  headingColor,
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const data = info.datas.map((item) => ({
    src: item.img,
    url: item.url,
    title: item.title,
    mainTxt: item.mainTxt,
  }));
  const images = data.map((image) => image.img);
  const imageLinks = data.map((image) => image.url);
  const imageHeadings = data.map((image) => image.title);
  const imageDescriptions = data.map((image) => image.mainTxt);

  // const images = data.map((image) => image.src);
  // const imageLinks = data.map((image) => image.link);
  // const imageHeadings = data.map((image) => image.title);
  // const imageDescriptions = data.map((image) => image.description);

  const handleClickNext = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const handleClickPrev = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1,
    );
  };

  const imgStyle = {
    borderRadius: '50%',
    position: 'relative',
    zIndex: '3',
  };

  const prevImgStyle = {
    ...imgStyle,
    position: 'relative',
    left: '20%',
    // opacity: '0.5',
    zIndex: '2',
    transform: 'scale(0.7)',
  };

  const firstImgStyle = {
    ...imgStyle,
    position: 'relative',
    left: '45%',
    // opacity: '0.5',
    zIndex: '1',
    transform: 'scale(0.4)',
  };

  const nextImgStyle = {
    ...imgStyle,
    position: 'relative',
    right: '20%',
    // opacity: '0.5',
    zIndex: '2',
    transform: 'scale(0.7)',
  };

  const lastImgStyle = {
    ...imgStyle,
    position: 'relative',
    right: '45%',
    // opacity: '0.5',
    zIndex: '1',
    transform: 'scale(0.4)',
  };

  const containerStyle = {
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: containerBackgroundColor,
    width: '85%',
    // height: '25rem', // 400px / 16px = 25rem
    borderRadius: '1.25rem',
    boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)',
  };

  const carouselStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };

  const contentStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  };

  const divStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '22rem', // 370px / 16px = 23.125rem
    height: 'fitContent',
    marginTop: '0',
  };

  const descriptionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: descriptionBackgroundColor,
    color: 'white',
    height: 'fitContent',
    borderRadius: '1.25rem',
    margin: '0 2rem 1.5rem 2rem',
    padding: '0 1rem 1rem 1rem', // 30px / 16px = 1.875rem, 15px / 16px = 0.938rem
    fontSize: '0.74rem', // 12px / 16px = 0.75rem
    textAlign: 'center',
  };

  Carousel.propTypes = {
    containerBackgroundColor: PropTypes.string.isRequired,
    descriptionBackgroundColor: PropTypes.string.isRequired,
    buttonColor: PropTypes.string.isRequired,
    imageHeadingColor: PropTypes.string.isRequired,
    headingColor: PropTypes.string.isRequired,
  };

  return (
    <div className="container" style={containerStyle}>
      <h1 style={{ color: headingColor }}>Recommended Courses</h1>
      <div className="carousel-container" style={carouselStyle}>
        <div className="content-container" style={contentStyle}>
          <button
            type="button"
            style={{ color: buttonColor }}
            onClick={handleClickPrev}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <div className="image-carousel" style={divStyle}>
            <img
              src={data[(currentImageIndex - 2 + data.length) % data.length].src}
              alt={data[(currentImageIndex - 2 + data.length) % data.length].title}
              style={firstImgStyle}
            />
            <img
              src={data[(currentImageIndex - 1 + data.length) % data.length].src}
              alt={data[(currentImageIndex - 1 + data.length) % data.length].title}
              style={prevImgStyle}
            />
            <a href={data[currentImageIndex].link}>
              <img
                src={data[currentImageIndex].src}
                alt={data[currentImageIndex].title}
                style={imgStyle}
              />
            </a>
            <img
              src={data[(currentImageIndex + 1) % data.length].src}
              alt={data[(currentImageIndex + 1) % data.length].title}
              style={nextImgStyle}
            />
            <img
              src={data[(currentImageIndex + 2) % data.length].src}
              alt={data[(currentImageIndex + 2) % data.length].title}
              style={lastImgStyle}
            />
          </div>
          <button
            type="button"
            style={{ color: buttonColor }}
            onClick={handleClickNext}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
      <a href={imageLinks[currentImageIndex]}>
        <div style={descriptionStyle}>
          <h2 style={{ color: imageHeadingColor }}>
            {imageHeadings[currentImageIndex]}
          </h2>
          {imageDescriptions[currentImageIndex]}
        </div>
      </a>
    </div>
  );
}

export default Carousel;
