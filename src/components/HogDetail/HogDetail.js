import React from 'react';
import { Card, Button } from 'semantic-ui-react';

function HogDetail({ hog, onClose }) {
  return (
    <div style={{ margin: '20px' }}>
      <Card>
        <Card.Content>
          <Card.Header>{hog.name}</Card.Header>
          <Card.Meta>Specialty: {hog.specialty}</Card.Meta>
          <Card.Description>
            <p>Weight: {hog.weight}</p>
            <p>Greased: {hog.greased ? 'Yes' : 'No'}</p>
            <p>Highest Medal Achieved: {hog['highest medal achieved']}</p>
            <img src={hog.image} alt={hog.name} style={{ width: '100%', height: 'auto' }} />
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button onClick={onClose} color='blue'>
            Close
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
}

export default HogDetail;
