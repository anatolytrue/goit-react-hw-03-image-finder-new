import { Component } from "react";
import { MainContainer } from "./App.styled";
import { Searchbar } from "components/Searchbar/";
import { ImageGallery } from "components/ImageGallery";
import { getPics } from "services/getPics";

export class App extends Component {

    state = {
      images: [],
      isShowModal: false,
      page: 1,
      searchQuery: '',
      status: 'idle',
      totalHits: 0,
      error: null,
      // loader: false
    }

  componentDidUpdate(_, prevState) {     
    const prevImages = prevState.searchQuery;
    const prevPage = prevState.page;
    const nextImages = this.state.searchQuery;
    const nextPage = this.state.page;

    if (prevImages !== nextImages || prevPage !== nextPage) {
      this.setState({
        status: 'pending',
      });
      if (nextPage === 1) {
        this.setState({ images: [] });
      }
      this.fetchPics();
      console.log('this.state', this.state);
    }
  }
    onSearchSubmit = (imageName) => {
      console.log('onSearchSubmit', imageName);
      if (imageName !== this.state.searchQuery) {
        this.setState({
          searchQuery: imageName,
          page: 1,
          images: [], 
          status: 'pending', 
        }, () => {
          console.log('this.state.images', this.state.images);
          this.fetchPics(); // Викликайте fetchPics після оновлення стану
        });
      }
  }
  
    fetchPics = () => {
    const { searchQuery, page } = this.state;
      console.log('searchQuery', searchQuery); 

    getPics(searchQuery, page)
      .then(response => {
      const hits = response.hits;

      this.setState(prevState => {
        if (!hits || hits.length === 0) {
          return {
            status: 'rejected',
          };
        } else {
          return {
            images: [...prevState.images, ...hits],
            status: 'resolved',
            totalHits: response.totalHits,
          };
        }
      });
    })
      .catch(error =>
        this.setState({ error: error.message, status: 'rejected' })
      );
}

  render() {

    return (
      <MainContainer>
      <Searchbar onSubmit={this.onSearchSubmit} />
      <ImageGallery images={this.state.images} />
          {/* <ImageGalleryItem/>
          <Loader/>
          <Button/>
          <Modal/> */}
      Gallery
      </MainContainer>
    );
  }
  
};
