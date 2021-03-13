import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const TeamDetail = () => {
  const {
    id,
    strCountry,
    strTeamBanner,
    strTeamLogo,
    intFormedYear,
    strGender,
  } = useParams();
  const [teams, setTeams] = useState({});
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeams(data.teams[0]));
  }, []);
  return (
    <div>
      <img src={teams.strTeamBanner} alt='' />
      <img src={teams.strTeamLogo} alt='' />
      <p>Founded: {teams.intFormedYear}</p>
      <p>Country: {teams.strCountry}</p>
      <p>Gender: {teams.strGender}</p>
      <p>{teams.strDescriptionEN}</p>
      <p>{teams.strStadiumDescription}</p>
    </div>
  );
};

export default TeamDetail;
