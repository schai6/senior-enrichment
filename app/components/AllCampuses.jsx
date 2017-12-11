import React from 'react';
import { Label, Image, Icon, Segment } from 'semantic-ui-react';
import { GridList, GridTile } from 'material-ui/GridList';
import { NavLink } from 'react-router-dom';

const AllCampuses = (props) => {
  return (
    <div className='root campus-grid'>
      <GridList cols={4} cellHeight={230} padding={10} className='gridList campus-gridList'>
        {props.campuses.map((campus) => (
          <GridTile title={''} titlePosition='top' key={campus.id}>
            <Segment raised className='campuses-segment'>
              <Label corner='right'>
                <Icon className='delete-campus-button' link size='small' disabled={campus.students.length ? true : false} name='window close' onClick={campus.students.length ? null : () => props.handleCampusDelete(campus.id, props.campuses)} />
              </Label >
              <NavLink to={`/campuses/${campus.id}`}><Image centered as='img' className="campus-image" label={{ color: 'blue', content: campus.name, ribbon: true }} src={campus.imageUrl} /></NavLink>
            </Segment>
          </GridTile>
        ))}
      </GridList>
    </div>
  );
};

export default AllCampuses;
