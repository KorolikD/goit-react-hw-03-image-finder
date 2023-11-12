import { Searchbar } from 'components/Searchbar/Searchbar';
import { GlobalStyles } from 'styles';

// const KEY = '29563680-7212c18ac3d60535e0c53b281';
// const reqvest = '';
// const page = 1;
// const URL = `https://pixabay.com/api/?q=${reqvest}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;

export const App = () => {
  return (
    <>
      <Searchbar />
      <GlobalStyles />
    </>
  );
};
