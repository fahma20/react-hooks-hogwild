import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import HogCard from '../HogCard/HogCard';


function HogList({ hogs }) {
  const [hiddenHogs, setHiddenHogs] = useState([]);

  const handleHide = (name) => {
    setHiddenHogs(prev => [...prev, name]);
  };

  const visibleHogs = hogs.filter(hog => !hiddenHogs.includes(hog.name));

  return (
    <Grid container>
      {visibleHogs.map(hog => (
        <Grid.Column width={8} key={hog.name}>
          <HogCard hog={hog} onHide={handleHide} />
        </Grid.Column>
      ))}
    </Grid>
  );
}

export default HogList;
