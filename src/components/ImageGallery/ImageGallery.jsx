import { ImageGalleryItem } from "components/ImageGalleryItem";
import { ImageGalleryList } from "./ImageGallery.styled";
import PropTypes from 'prop-types';

export function ImageGallery({ images, toggleModal }) {
        return (
            <ImageGalleryList>
                {images.map(({id, tags, webformatURL, largeImageURL}) => (
                    <ImageGalleryItem 
                        key={id}
                        alt={tags}
                        previewImage={webformatURL}
                        onClickImage={() => {
                            toggleModal(largeImageURL);
                        }}
                    />
                ))}
            </ImageGalleryList>
    )
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            tags: PropTypes.string.isRequired,
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
        })
    ),
    toggleModal: PropTypes.func.isRequired
}