import React from 'react';
import { Button } from 'react-bootstrap';

const CompleteTrainingProgramButton = ({ trainingId, onCompleteTraining }) => {
  const handleClick = () => {
    onCompleteTraining(trainingId);
  };

  return (
    <Button style={{backgroundColor: "#1c698d"}} variant="success" onClick={handleClick}>
      Complete Training
    </Button>
  );
};

export default CompleteTrainingProgramButton;
