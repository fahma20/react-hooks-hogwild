import React, { useState } from 'react';
import Nav from './Nav';
import HogList from './HogList/HogList'
import hogs from '../porkers_data'; 
import styles from './App.module.css';
import HogDetail from './HogDetail/HogDetail'; 

function App() {
  const [showGreased, setShowGreased] = useState(false);
  const [sortBy, setSortBy] = useState('name');
  const [hiddenHogs, setHiddenHogs] = useState([]);
  const [selectedHog, setSelectedHog] = useState(null); 


  const filteredHogs = hogs.filter(hog => {
    const isHidden = hiddenHogs.includes(hog.name);
    return !isHidden && (showGreased ? hog.greased : true);
  });

  
  const sortedHogs = filteredHogs.sort((a, b) => {
    return sortBy === 'name' ? a.name.localeCompare(b.name) : a.weight - b.weight;
  });

  return (
    <div className={`App ${styles.app}`}>
      <Nav setFilterGreased={setShowGreased} setSortBy={setSortBy} />
      <HogList hogs={sortedHogs} setHiddenHogs={setHiddenHogs} setSelectedHog={setSelectedHog} />
      {selectedHog && <HogDetail hog={selectedHog} onClose={() => setSelectedHog(null)} />}
    </div>
  );
}

export default App;
