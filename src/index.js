import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import PropsMessage from "./MessageComponent";
import NameComponent from "./NameComponent";
import LocationComponent from "./LocationComponent";
import HobbiesComponent from "./HobbiesComponent";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Ryan",
      message: "Hello from App State!",
      propsMessage: "This is my message from props!",
      propsThing: "Max",
      location: "New York",
      hobbies: ["reading", "videogames", "exercise"],
      welcomeMessage: "world!"
    };
  }

  handleChangeFunction = (event) => {
    this.setState({ propsThing: event.target.value });
  };

  updateStateMessage = (e) => {
    this.setState({ welcomeMessage: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello {this.state.name}</h1>
        <RenderMessage message={this.state.message} />
        <PropsMessage propsMessage={this.state.propsMessage} />
        <NameComponent propsName={this.state.propsThing} />
        <LocationComponent propLocation={this.state.location} />
        <h5>My Hobbies include the following:</h5>
        <HobbiesComponent banjo={this.state.hobbies} />
        <input onChange={this.handleChangeFunction} />
        <WelcomeBanner message={this.state.welcomeMessage} />
        <FormComponent updateStateMessage={this.updateStateMessage} />
      </div>
    );
  }
}

function RenderMessage(props) {
  return <div>{props.message}</div>;
}

const WelcomeBanner = (props) => {
  return <h1>Hello, {props.message}</h1>;
};

const FormComponent = (props) => {
  return (
    <form>
      <input placeholder="change state" onChange={props.updateStateMessage} />
    </form>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
