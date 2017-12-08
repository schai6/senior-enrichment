import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

const AllCampuses = (props) => {
  return (
    <div>
      <Grid padded>
        <Grid.Row columns="4">
          <Grid.Column>
            <Image label={{ as: 'a', color: 'black', content: 'Earth', ribbon: true }} src='/planets/earth.jpg' />
          </Grid.Column>
          <Grid.Column>
            <Image label={{ as: 'a', color: 'black', content: 'Jupiter', ribbon: true }}src='/planets/jupiter.jpg' />
          </Grid.Column>
          <Grid.Column>
            <Image label={{ as: 'a', color: 'black', content: 'Mars', ribbon: true }}src='/planets/mars.jpg' />
          </Grid.Column>
          <Grid.Column>
            <Image label={{ as: 'a', color: 'black', content: 'Mercury', ribbon: true }}src='/planets/mercury.jpg' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div >
  );
};

export default AllCampuses;
