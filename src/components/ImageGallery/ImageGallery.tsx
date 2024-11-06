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

    const renderTwoImages = () => (
        <div className="grid grid-cols-2 gap-1">
            {displayedImages.map((image, index) => (
                <div key={index} className={`img `}>
                    <img
                        src={image}
                        alt={`gallery-${index}`}
                        className="w-full h-full object-contain"
                    />
                </div>
            ))}
        </div>
    );
    const renderThreeImages = () => (
        <div className="flex flex-col gap-1 max-h-[780px]">
            <div className="flex-2 overflow-hidden">
                <img
                    src={displayedImages[0]}
                    alt="gallery-0"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex flex-2 gap-1">
                <div className="flex-2 overflow-hidden">
                    <img
                        src={displayedImages[1]}
                        alt="gallery-1"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex-2 overflow-hidden ">
                    <img
                        src={displayedImages[2]}
                        alt="gallery-2"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );


    const renderFourImages = () => (
        <div className="grid grid-cols-2 grid-rows-2 gap-1">
            <div className={`img_4_1 img  `}>
                <img
                    src={displayedImages[0]}
                    alt="gallery-0"
                    className="w-full h-full object-contain"
                />
            </div>
            <div className={`img_4_2 img  `}>
                <img
                    src={displayedImages[1]}
                    alt="gallery-1"
                    className="w-full h-full object-contain"
                />
            </div>
            <div className={`img_4_3 img  `}>
                <img
                    src={displayedImages[2]}
                    alt="gallery-2"
                    className="w-full h-full object-contain"
                />
            </div>
            <div className={`img_4_4 img  `}>
                <img
                    src={displayedImages[3]}
                    alt="gallery-3"
                    className="w-full h-full object-contain"
                />
            </div>
        </div>
    );

    const renderFiveImages = () => (
        <div className="flex flex-col gap-1 max-h-[780px]">
            <div className="flex flex-1 gap-1">
                <div className="flex-2 overflow-hidden ">
                    <img
                        src={displayedImages[1]}
                        alt="gallery-1"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex-2 overflow-hidden ">
                    <img
                        src={displayedImages[2]}
                        alt="gallery-2"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
            <div className='flex flex-1 h-full'>
                <div className={`flex-2 img_5_3 img col-span-2`}>
                    <img
                        src={displayedImages[2]}
                        alt="gallery-2"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className={`flex-2 img_5_4 img col-span-1`}>
                    <img
                        src={displayedImages[3]}
                        alt="gallery-3"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className={`flex-2 img_5_5 img col-span-1`}>
                    <img
                        src={displayedImages[4]}
                        alt="gallery-4"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );


    return (
        <div className="grid gap-1">
            {images.length === 1 ? renderSingleImage() :
                images.length === 2 ? renderTwoImages() :
                    images.length === 3 ? renderThreeImages() :
                        images.length === 4 ? renderFourImages() :
                            images.length === 5 ? renderFiveImages() : null}
            {remainingCount > 0 && (
                <div className={`show_more_img `}>
                    <div className="show_more_text">+{remainingCount}</div>
                </div>
            )}
        </div>
    );
};

export default ImageGallery;