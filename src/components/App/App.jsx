import { Component } from "react";
import { MainContainer } from "./App.styled";
import { Searchbar } from "components/Searchbar/";


export class App extends Component {

    handleSubmit = (e) => {
      console.log(e)
    }
    

  render() {

  
    return (
      <MainContainer>
      <Searchbar onSubmit={ this.handleSubmit} />
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
