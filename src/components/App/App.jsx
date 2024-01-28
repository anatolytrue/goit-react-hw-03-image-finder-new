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

    if ((prevImages !== nextImages || prevPage !== nextPage) && this.state.status !== 'pending') {
      this.setState({
        status: 'pending',
      });
      if (nextPage === 1) {
        this.setState({ images: [] });
      }
      this.fetchPics();
    }
  }

  onSearchSubmit = (imageName) => {
  if (imageName !== this.state.searchQuery && this.state.status !== 'pending') {
    this.setState({
      searchQuery: imageName,
      page: 1,
      images: [], 
      status: 'pending',
    }, () => {
      this.fetchPics(); 
    });
  }
}


  // onSearchSubmit = (imageName) => {
  //   if (imageName !== this.state.searchQuery && this.state.status !== 'pending') {
  //     this.setState({
  //       searchQuery: imageName,
  //       page: 1,
  //       images: [],
  //       status: 'pending',
  //     }, () => {
  //       this.fetchPics();
  //     },
  // }
  // }
  
    fetchPics = () => {
    const { searchQuery, page } = this.state;

      getPics(searchQuery, page)
        .then(response => {
          console.log('Response from getPics:', response);
          const hits = response.hits;
          
          if (!hits || hits.length === 0) {
            this.setState ({
              status: 'rejected',
            })
          } else {
            this.setState((prevState) => ({
              images: page === 1 ? hits : [...prevState.images, ...hits],
              status: 'resolved',
              totalHits: response.totalHits,
              // page: page + 1,
            }))
          }
      })
        .catch(error => {
          console.log(error);
          this.setState({ error: error.message, status: 'rejected' });
        })
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
