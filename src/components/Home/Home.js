import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';

// list all teams in a league
// https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League

// team detail by id
// https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=133604
const Home = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeams(data.teams));
  }, []);
  return (
    <div>
      <h1>This is Home Page.</h1>
      <h1>No of Team played: {teams.length}</h1>

      {teams.map((team) => (
        <Team team={team}></Team>
      ))}
    </div>
  );
};

export default Home;
