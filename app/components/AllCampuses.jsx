import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

const AllCampuses = (props) => {
  const colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'];
  const campuses = props.campuses;
  let rows = [];
  for (let i = 0; i < campuses.length; i += 4) {
    rows.push([]);
    for (let j = i; j < i + 4; j++) {
      rows[i/4].push(campuses[j]);
    }
  }
  return (
    <Grid padded>
      {rows.map((row, i) => {
        return (<Grid.Row key={i} columns="4">
          {row.map(campus => {
            return (<Grid.Column key={campus.id}>
              <Image label={{ color: colors[Math.floor(Math.random() * colors.length)], content: campus.name, ribbon: true }} src={campus.imageUrl} />
            </Grid.Column>);
          })}
        </Grid.Row>);
      })
      }
    </Grid>
  );
};

export default AllCampuses;
