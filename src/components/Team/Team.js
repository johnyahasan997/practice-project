import { Button } from 'bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Team = (props) => {
  const { strTeamLogo, strSport, strTeam, idTeam } = props.team;
  console.log(props.team);
  const history = useHistory();
  const showDetails = (id) => {
    const url = `Team/${id}`;

    history.push(url);
  };
  return (
    <div className='container'>
      <img className='img' src={strTeamLogo} alt='' />
      <h1>{strTeam}</h1>
      <p>Sports type: {strSport}</p>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src='holder.js/100px180' />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={() => showDetails(idTeam)} variant='primary'>
            Explore
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Team;
