import React from 'react';

interface ImageGalleryProps {
    images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({images}) => {
    const displayedImages = images.slice(0, 5);
    const remainingCount = images.length - 5;

    const renderSingleImage = () => (
        <div className="w-full max-h-[517px] overflow-hidden">
            <img
                src={images[0]}
                alt="gallery"
                className="w-full h-full object-contain"
            />
        </div>
    );

    const renderMultipleImages = () => {
        const gridClasses = () => {
            if (images.length === 2) return 'grid-cols-2';
            if (images.length === 3) return 'grid-cols-2 grid-rows-[auto,1fr]';
            return 'grid-cols-2 grid-rows-2';
        };

        return (
            <div
                className={`grid gap-1 ${gridClasses()} max-h-[517px] overflow-hidden`}
                style={{
                    gridTemplateColumns: images.length === 3 ? '1fr 1fr' : 'repeat(2, minmax(150px, 1fr))',
                    gridTemplateRows: images.length === 3 ? 'auto 1fr' : undefined,
                }}
            >
                {displayedImages.map((image, index) => (
                    <div
                        key={index}
                        className={`relative ${
                            index === 0 && images.length === 3 ? 'col-span-2' : ''
                        }`}
                        style={{
                            maxWidth: '100%',
                        }}
                    >
                        <img
                            src={image}
                            alt={`gallery-${index}`}
                            className="w-full h-full object-contain"
                        />
                        {index === 3 && remainingCount > 0 && (
                            <div
                                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                            <span className="text-white text-2xl font-semibold">
                                +{remainingCount}
                            </span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        );
    };

    return <div className="grid gap-1">{images.length === 1 ? renderSingleImage() : renderMultipleImages()}</div>;
};

export default ImageGallery;
