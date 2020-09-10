import React from "react";
import {
  Grid,
  Header,
  Icon,
  Menu,
  Segment,
  Sidebar,
  Button,
} from "semantic-ui-react";

const Dashboard = () => (
  <Grid padded='vertically'>
    <Grid.Column width={1}>
      <Sidebar
        as={Menu}
        animation="push"
        icon="labeled"
        inverted
        vertical
        visible
        width="100%"
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
    <Grid.Column width={4}>
      <Segment>
        Pellentesque habitant morbi tristique senectus.
      </Segment>
      {/* <Image src="/images/wireframe/paragraph.png" /> */}
    </Grid.Column>
    <Grid.Column width={11}>
      <Segment placeholder>
        <Header icon>
          <Icon name="pdf file outline" />
          No documents are listed for this customer.
        </Header>
        <Button primary>Add Document</Button>
      </Segment>
      {/* <Image src='/images/wireframe/media-paragraph.png' /> */}
    </Grid.Column>
  </Grid>
);

export default Dashboard;
