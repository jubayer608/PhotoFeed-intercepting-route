import PhotoDetails from '@/components/PhotoDetails';
import React from 'react';

const PhotoDetailsPage = ({params:{id,lang}}) => {
    return (
        <PhotoDetails id={id} lang={lang}></PhotoDetails>
    );
};

export default PhotoDetailsPage;