import React from "react";
import {
  Grid,
  Header,
  Icon,
  Menu,
  Segment,
  Sidebar,
  Button,
  Image,
  Rail,
} from "semantic-ui-react";
import Astronaut2 from "./astronaut-2.png";
import "./dashboard.css";

const Dashboard = () => (
  <Grid divided>
    <Grid.Column width={1}>
      <Sidebar
        as={Menu}
        animation="push"
        icon="labeled"
        inverted
        vertical
        visible
      
      >

        <Menu.Item as="a">
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="gamepad" />
          Games
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="camera" />
          Channels
        </Menu.Item>

        
      </Sidebar>
    </Grid.Column>
    <Grid.Column width={4} className="wrapperContainer">
      {/* <Sidebar
        as={Menu}
        animation="push"
        icon="labeled"
        inverted
        vertical
        visible
      >
        <Menu.Item as="a">
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="gamepad" />
          Games
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="camera" />
          Channels
        </Menu.Item>
      </Sidebar> */}
      <Segment
        basic
        placeholder
        textAlign="center"
        style={{ height: "100vh" }}
        vertical
      >
        <Rail internal  close={false}>
          <div className="middleHeader">
            <p>Cases</p>
            <Icon name="users" circular />
          </div>
        </Rail>

        <Header as="h2">Welcome!</Header>
        <p className="welcome">
          You can edit your account at any time by clicking your initials above.
        </p>
      </Segment>
    </Grid.Column>
    <Grid.Column width={11}>
      <Segment
        basic
        placeholder
        textAlign="center"
        style={{ height: "100vh", padding: "1em 0em", marginLeft: "80px" }}
        vertical
      >
        <Image centered src={Astronaut2} size="medium" />
        <Header as="h2">Open a New Case</Header>
        <p className="getStarted">
          Use our step-by-step guide to provide details about the data you are
          collecting and its purpose. Our powerful technology and legal advisors
          will then analyse your case and provide you with clear action steps to
          be legally compliant.
        </p>
        <Button color="green">Get Started</Button>
      </Segment>
    </Grid.Column>
  </Grid>
);

export default Dashboard;
