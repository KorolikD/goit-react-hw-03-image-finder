import React from 'react';
import { GalleryList } from './ImageGallery.styled';
import { GalleryItem } from './ImageGalleryItem.styled';

export const ImageGallery = ({ images }) => (
  <GalleryList>
    {images.map(({ id, largeImageURL, tags }) => (
      <GalleryItem key={id} largeImageURL={largeImageURL} tags={tags} />
    ))}
  </GalleryList>
);
