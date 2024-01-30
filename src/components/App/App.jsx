import { Component } from "react";
import { MainContainer } from "./App.styled";
import { Searchbar } from "components/Searchbar/";
import { ImageGallery } from "components/ImageGallery";
import { getPics } from "services/getPics";
import { Button } from "components/Button";
import { Loader } from "components/Loader";

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
  
  loadMore = () => {
      this.setState((prevState) => ({
        page: prevState.page + 1,
      }), () => {
        this.fetchPics();
      });
  }

  render() {

    const {images, status} = this.state

    return (
      <MainContainer>
        <Searchbar onSubmit={this.onSearchSubmit} />
        {status !== 'idle' && images.length > 0 && (
          <ImageGallery images={images} />
        )} 
        {status === 'resolved' && images.length !== 0 && (
          <Button onClick={this.loadMore} />
        )}
        {status === "pending" && <Loader/>}
          {/* 
        
        
          <Modal/> */}
      </MainContainer>
    );
  }
  
};
