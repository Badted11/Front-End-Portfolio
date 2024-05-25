import React from 'react';

const ResponsiveImage = ({ src, srcset, sizes, alt }) => {
    return <img src={src} srcSet={srcset} sizes={sizes} alt={alt} />;
};

export default ResponsiveImage;
