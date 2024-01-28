export function ImageGallery({images}) {
    console.log('images in ImageGallery', images);
        return (
            <ul>
                {images.map(({ id, tags, webformatURL }) => (
                    // <ImageGalleryItem/>
                    <li key={id}>
                        <img
                            src={webformatURL}
                            alt={tags}
                        />
                    </li>
                ))}
        </ul>
    )
}