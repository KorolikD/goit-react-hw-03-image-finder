import React, { Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { GlobalStyles } from 'styles';
import { Wraper } from './App.styled';

import { fetchImagesWithQuery } from 'helpers';
import { Loader } from 'components/Loader/Loader';
import { GalleryList } from 'components/ImageGallery/ImageGallery.styled';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    page: 1,
  };

  async componentDidMount() {
    try {
      const images = await fetchImagesWithQuery('cat', this.state.page);
      this.setState({ images: [...images.hits] });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }
  componentDidUpdate(prevProps, prevState) {}

  render() {
    const { images, isLoading } = this.state;
    console.log(images);

    return (
      <Wraper>
        <Searchbar />
        {isLoading && <Loader />}
        {images && <GalleryList images={images} />}

        <GlobalStyles />
      </Wraper>
    );
  }
}

//!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const fetchArticlesWithQuery = async searchQuery => {
//   const response = await axios.get(`/search?query=${searchQuery}`);
//   return response.data.hits;
// };

// axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

// export class App extends Component {
//   state = {
//     articles: [],
//     isLoading: false,
//     error: null,
//   };

//   async componentDidMount() {
//     this.setState({ isLoading: true });

//     try {
//       const articles = await fetchArticlesWithQuery('react');
//       console.log(articles);
//       this.setState({ articles });
//     } catch (error) {
//       this.setState({ error });
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   }

//   render() {
//     const { articles, isLoading, error } = this.state;

//     return (
//       <div>
//         {error && <p>Whoops, something went wrong: {error.message}</p>}
//         {isLoading && <p>Loading...</p>}
//         {articles.length > 0 && <ArticleList articles={articles} />}
//       </div>
//     );
//   }
// }

// axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

// const ArticleList = ({ articles }) => (
//   <ul>
//     {articles.map(({ objectID, url, title }) => (
//       <li key={objectID}>
//         <a href={url} target="_blank" rel="noreferrer noopener">
//           {title}
//         </a>
//       </li>
//     ))}
//   </ul>
// );
