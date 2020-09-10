import React from "react";
import { Button, Header, Icon, Segment, Container } from "semantic-ui-react";

const App = () => (
  <Container>
    <Segment placeholder>
      <Header icon>
        <Icon name="search" />
        Welcome to Kormoon.
      </Header>
      <Button primary>Get Started</Button>
    </Segment>
  </Container>
);

export default App;
