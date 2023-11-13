import axios from 'axios';

axios.defaults.baseURL = `https://pixabay.com/api`;

export const fetchImagesWithQuery = async (searchQuery, page, perPage) => {
  const KEY = '29563680-7212c18ac3d60535e0c53b281';
  const response = await axios.get(
    `/?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
  );
  return response.data;
};
