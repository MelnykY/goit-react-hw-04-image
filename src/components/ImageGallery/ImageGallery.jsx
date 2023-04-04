import { ImageGalleryList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ list, onClick }) => {
  return (
    <ImageGalleryList>
      {list.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          smallImg={webformatURL}
          largeImg={largeImageURL}
          tags={tags}
          onClick={onClick}
        />
      ))}
    </ImageGalleryList>
  );
};

ImageGallery.propTyps = {
  list: PropTypes.shape({
    smallImg: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImg: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
