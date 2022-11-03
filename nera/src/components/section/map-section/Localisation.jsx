import React from "react";
import Map from "./Map";
import { DateTime } from "luxon";
import { Address, Horaire, SetMap } from "./assets/Map.styles";
import data from "./assets/data"

function Localisation({theme}) {
  const hours = DateTime.now().hour;

  const shop = data.map((current, idx) => {
    return (
      <div key={idx}>
        <h3>{current.name}</h3>
        <p>{current.days}</p>
        <p>{current.begin} - {current.end}</p>
      </div> 
    )
  })

  function setName() {
    if (hours > 11 || hours > 14) return 'Nous sommes';
    if (hours < 9 || hours > 15) return 'Nous sommes';
    if (hours > 9 || hours < 15) return 'Nera Muse est';
    
  }

  return (
    <SetMap now={hours} theme={theme}>
      <h2>{setName()} <span>{hours < 9 || hours > 15 ? 'fermés' : 'ouvert'}</span></h2>
      <Horaire>
        {shop}
      </Horaire>
      <Address>
        <p>🏠 5 rue Taison, 57000 Metz</p>
        <p>🏠 2 rue des Messageries, 57000 Metz</p>
      </Address>
      <Map  theme={theme}/>
    </SetMap>
  )
}

export default Localisation;