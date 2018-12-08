import React from "react";
import "./App.css";
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import CardContainer from "./components/CardComponents/CardContainer";
import Footer from "./components/FooterComponents/Footer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      shares: 0
    };
  }

  likeClick = event => {
    event.preventDefault();
    let plusLikes = this.state.likes;
    plusLikes++;
    this.setState({ likes: plusLikes });
  };

  shareClick = event => {
    event.preventDefault();
    let plusShares = this.state.shares;
    plusShares += 1;
    this.setState({ shares: plusShares });
  };

  render() {
    return (
      <div className="app-container">
        <HeaderContainer />
        <CardContainer />
        <Footer
          shareHandler={this.shareClick}
          likeHandler={this.likeClick}
          numbers={this.state}
        />
      </div>
    );
  }
}

export default App;
