import React from 'react';
import { Label, Image, Icon, Segment } from 'semantic-ui-react';
import { GridList, GridTile } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

const AllCampuses = (props) => {
  console.log(props);
  return (
    <div className='root campus-grid'>
      <GridList cols={4} cellHeight={230} padding={10} className='gridList campus-gridList'>
        <Subheader>Campuses</Subheader>
        {props.campuses.map((campus) => (
          <GridTile title={''} titlePosition='top' key={campus.id}>
            <Segment raised className='campuses-segment'>
              <Label corner='right'>
                <Icon link size='small' name='window close' onClick={() => props.handleCampusDelete(campus.id)} />
              </Label >
              <Image centered as='img' className="campusImage" label={{ color: 'blue', content: campus.name, ribbon: true }} src={campus.imageUrl} />
            </Segment>
          </GridTile>
        ))}
      </GridList>
    </div>
  );
};

export default AllCampuses;
