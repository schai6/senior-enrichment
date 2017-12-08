import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

const AllCampuses = (props) => {
  return (
    <div>
      <Grid padded>
        <Grid.Row>
          <Grid.Column>
            <Image width={10}src='https://static.pexels.com/photos/2422/sky-earth-galaxy-universe.jpg' />
          </Grid.Column>
          <Grid.Column>
            <Image src='https://brianasaussy.com/wp-content/uploads/2016/08/jupiter-image.jpg' />
          </Grid.Column>
          <Grid.Column>
            <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1200px-OSIRIS_Mars_true_color.jpg' />
          </Grid.Column>
          <Grid.Column>
            <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/1200px-Mercury_in_color_-_Prockter07-edit1.jpg' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div >
  );
};

export default AllCampuses;
