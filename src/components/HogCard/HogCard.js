/*import React from 'react';
import PropTypes from 'prop-types';
import styles from './HogCard.module.css';

const HogCard = () => (
  <div className={styles.HogCard}>
    HogCard Component
  </div>
);

HogCard.propTypes = {};

HogCard.defaultProps = {};

export default HogCard;
*/
/*import React, { useState } from 'react';
import { Card, Image, Button } from 'semantic-ui-react';

function HogCard({ hog, onHide }) {
  const [isDetailVisible, setDetailVisible] = useState(false);
  const [isHidden, setHidden] = useState(false);

  const handleToggleDetail = () => {
    setDetailVisible(prev => !prev);
  };

  const handleHide = () => {
    setHidden(true);
    onHide(hog.name); // Call the onHide function passed from the parent
  };

  if (isHidden) return null; // If hidden, don't render anything

  return (
    <Card onClick={handleToggleDetail}>
      <Image src={hog.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{hog.name}</Card.Header>
        {isDetailVisible && (
          <Card.Description>
            <p>Specialty: {hog.specialty}</p>
            <p>Weight: {hog.weight}</p>
            <p>Greased: {hog.greased ? 'Yes' : 'No'}</p>
            <p>Highest Medal Achieved: {hog.highestMedalAchieved}</p>
          </Card.Description>
        )}
      </Card.Content>
      <Button onClick={handleHide} color='red'>
        Hide
      </Button>
    </Card>
  );
}

export default HogCard;*/
import React, { useState } from 'react';
import { Card, Image, Button } from 'semantic-ui-react';

function HogCard({ hog, onHide }) {
  const [isDetailVisible, setDetailVisible] = useState(false);
  const [isHidden, setHidden] = useState(false);

  const handleToggleDetail = () => {
    setDetailVisible(prev => !prev);
  };

  const handleHide = (event) => {
    event.stopPropagation(); // Prevent triggering the card click
    setHidden(true);
    onHide(hog.name); // Call the onHide function passed from the parent
  };

  if (isHidden) return null; // If hidden, don't render anything

  return (
    <Card onClick={handleToggleDetail}>
      <Image src={hog.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{hog.name}</Card.Header>
        {isDetailVisible && (
          <Card.Description>
            <p>Specialty: {hog.specialty}</p>
            <p>Weight: {hog.weight}</p>
            <p>Greased: {hog.greased ? 'Yes' : 'No'}</p>
            <p>Highest Medal Achieved: {hog['highest medal achieved']}</p>
          </Card.Description>
        )}
      </Card.Content>
      <Card.Content extra>
        <Button onClick={handleHide} color='red'>
          Hide
        </Button>
      </Card.Content>
    </Card>
  );
}

export default HogCard;

