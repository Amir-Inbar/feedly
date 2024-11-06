declare module 'react-fb-image-video-grid' {
    import { FC } from 'react';

    interface ReactFbImageGridProps {
        images: string[] | React.ReactNode[];
        countFrom?: number;
        hideOverlay?: boolean;
        renderOverlay?: () => React.ReactNode;
        overlayBackgroundColor?: string;
        onClickEach?: (data: { src: string; index: number }) => void;
    }

    const ImageGrid: FC<ReactFbImageGridProps>;
    export default ImageGrid;
}
