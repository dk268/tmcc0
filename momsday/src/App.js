import React, { Component } from "react";
import "./App.css";
import Footer from "./Footer";
import photo0 from "./assets/Wilson/0.jpg";
import photo1 from "./assets/Wilson/1.jpg";
import photo2 from "./assets/Wilson/2.jpg";
import photo3 from "./assets/Wilson/3.jpg";
import photo4 from "./assets/Wilson/4.jpg";
import photo5 from "./assets/Wilson/5.jpg";
import photo6 from "./assets/Wilson/6.jpg";
import photo7 from "./assets/Wilson/7.jpg";
import photo8 from "./assets/Wilson/8.jpg";
import photo9 from "./assets/Wilson/9.jpg";
import photo10 from "./assets/Wilson/10.jpg";
import photo11 from "./assets/Wilson/11.jpg";
import photo12 from "./assets/Wilson/12.jpg";
import photo13 from "./assets/Wilson/13.jpg";
import photo14 from "./assets/Wilson/14.jpg";
import photo15 from "./assets/Wilson/15.jpg";
import photo16 from "./assets/Wilson/16.jpg";
import photo17 from "./assets/Wilson/17.jpg";
import photo18 from "./assets/Wilson/18.jpg";
import photo19 from "./assets/Wilson/19.jpg";
import photo20 from "./assets/Wilson/20.jpg";
import photo21 from "./assets/Wilson/21.jpg";
import photo22 from "./assets/Wilson/22.jpg";
import photo23 from "./assets/Wilson/23.jpg";
import photo24 from "./assets/Wilson/24.jpg";
import photo25 from "./assets/Wilson/25.jpg";
import photo26 from "./assets/Wilson/26.jpg";
import photo27 from "./assets/Wilson/27.jpg";
import photo28 from "./assets/Wilson/28.jpg";
import photo29 from "./assets/Wilson/29.jpg";
import photo30 from "./assets/Wilson/30.jpg";
import photo31 from "./assets/Wilson/31.jpg";
import photo32 from "./assets/Wilson/32.jpg";
import photo33 from "./assets/Wilson/33.jpg";
import photo34 from "./assets/Wilson/34.jpg";
import photo35 from "./assets/Wilson/35.jpg";
import photo36 from "./assets/Wilson/36.jpg";
import photo37 from "./assets/Wilson/37.jpg";
import photo38 from "./assets/Wilson/38.jpg";
import photo39 from "./assets/Wilson/39.jpg";
import photo40 from "./assets/Wilson/40.jpg";
import photo41 from "./assets/Wilson/41.jpg";
import photo42 from "./assets/Wilson/42.jpg";
import photo43 from "./assets/Wilson/43.jpg";
import photo44 from "./assets/Wilson/44.jpg";
import photo45 from "./assets/Wilson/45.jpg";
import photo46 from "./assets/Wilson/46.jpg";
import photo47 from "./assets/Wilson/47.jpg";
import photo48 from "./assets/Wilson/48.jpg";
import photo49 from "./assets/Wilson/49.jpg";

const photos = [
  photo0,
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
  photo13,
  photo14,
  photo15,
  photo16,
  photo17,
  photo18,
  photo19,
  photo20,
  photo21,
  photo22,
  photo23,
  photo24,
  photo25,
  photo26,
  photo27,
  photo28,
  photo29,
  photo30,
  photo31,
  photo32,
  photo33,
  photo34,
  photo35,
  photo36,
  photo37,
  photo38,
  photo39,
  photo40,
  photo41,
  photo42,
  photo43,
  photo44,
  photo45,
  photo46,
  photo47,
  photo48,
  photo49,
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedButton: false,
      photosSeen: new Set(),
      currentPhoto: ``,
    };
  }
  componentDidMount = () => {};

  engagePhoto = () => {
    const newInteger = Math.floor(Math.random() * 50);
    this.setState(prevState => ({
      ...prevState,
      photosSeen: prevState.photosSeen.add(newInteger),
      currentPhoto: photos[newInteger],
    }));
  };
  handleClick = e => {
    this.setState({
      clickedButton: true,
    });
    this.engagePhoto();
  };

  render() {
    return (
      <div className="App">
        {!this.state.clickedButton ? (
          <div className="App-header">
            <h2>Since your kids are ungrateful slugheads</h2>
            <h1>Wilson has taken matters into his own hands</h1>
            <h4>Click below</h4>
            <button type="button" onClick={this.handleClick}>
              click me
            </button>
          </div>
        ) : (
          <div>
            <h2>happy mother's day!</h2>
            <img
              style={{ maxHeight: "80vh", maxWidth: "80vm" }}
              src={this.state.currentPhoto}
              onClick={this.handleClick}
              alt="wilson"
            />
            <h3>Click on image to see another one~</h3>
            <Footer num={this.state.photosSeen.size} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
