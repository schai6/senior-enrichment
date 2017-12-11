import React from 'react';
import { Label, Image, Icon, Segment } from 'semantic-ui-react';
import { GridList, GridTile } from 'material-ui/GridList';
import { NavLink } from 'react-router-dom';
import AllCampusesAddModalContainer from '../containers/AllCampusesAddModalContainer';

const AllCampuses = (props) => {
  return (
    <div>
      <AllCampusesAddModalContainer />
      <div className='root campus-grid'>
        <GridList cols={4} cellHeight='auto' padding={10} className='gridList campus-gridList'>
          {props.campuses.map((campus) => (
            <GridTile title={''} titlePosition='top' key={campus.id}>
              <Segment raised className='campuses-segment'>
                <Label corner='right'>
                  <Icon className='delete-campus-button' link size='small' disabled={campus.students.length ? true : false} name='window close' onClick={campus.students.length ? null : () => props.handleCampusDelete(campus, props.campuses, props.students)} />
                </Label >
                <NavLink to={`/campuses/${campus.id}`}><Image centered as='img' className="campus-image" label={{ color: 'blue', content: campus.name, ribbon: true }} src={campus.imageUrl} /></NavLink>
              </Segment>
            </GridTile>
          ))}
        </GridList>
      </div>
    </div>
  );
};

export default AllCampuses;
