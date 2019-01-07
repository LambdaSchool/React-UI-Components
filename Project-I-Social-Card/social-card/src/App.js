import React from "react";
import "./App.css";
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import CardContainer from "./components/CardComponents/CardContainer";
import logo from "./images/lambda_logo.jpg";

const profileHeader = {
  imageSource: logo,
  profileName: "Lambda School",
  profileHandle: "@LambdaSchool",
  date: "26 Jan",
  headerContent:
    "Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!"
};

const postContent = {
  postImage:
    "https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png",
  postTitle: "Get started with React",
  postContent: "Get started with React",
  postLink: "reactjs.org"
};

// imageSource = { imageSource } profileName = { profileName } profileHandle = { profileHandle } date = { date } headerContent = { headerContent }

const App = () => {
  return (
    <div>
      <HeaderContainer profile={profileHeader} />
      <CardContainer post={postContent} />
      <h3>Welcome to React Social Card!</h3>
      <p>
        Begin by exploring the `components` directory. You'll notice we have a
        few files that we've already included in there to get you started right
        away building components. You'll need to make sure you include your
        components that you build in this file to watch your app come to life
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p>
    </div>
  );
};

export default App;
