import { Component } from "react";
import { MainContainer } from "./App.styled";
import { Searchbar } from "components/Searchbar/";
import { getPics } from "services/getPics";

export class App extends Component {

  state = {
    isShowModal: false
  }

  componentDidUpdate(prevProps, prevState) { 
    
    if (prevProps.searchedPics !== this.props.searchedPics) {
      getPics()
    }
  } 

  // componentDidMount() {
  //   fetch()
  // }

  // handleSubmit = ({e}) => {
  //     e.preventDefault()
  //     console.log(e.target)
  //   }
    

  render() {

  
    return (
      <MainContainer>
      <Searchbar onSubmit={ console.log} />
      {/* <ImageGallery/>
          <ImageGalleryItem/>
          <Loader/>
          <Button/>
          <Modal/> */}
      Gallery
      </MainContainer>
    ); 

  }
  
};
