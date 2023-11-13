import React from 'react';
import { GalleryList } from './ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ images }) => (
  <GalleryList>
    {images.map(({ id, largeImageURL, tags }) => (
      <ImageGalleryItem key={id} largeImageURL={largeImageURL} tags={tags} />
    ))}
  </GalleryList>
);
