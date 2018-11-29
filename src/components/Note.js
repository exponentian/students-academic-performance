import React from 'react';
import { Alert } from 'react-bootstrap';

const Note = () => (
  <Alert bsStyle="danger">
    <strong>
      <i className="fas fa-info-circle"></i> Note:
    </strong>{' '}
    I used some fake information such as username, user id, full name, phone, location, and etc.
  </Alert>
);

export default Note;