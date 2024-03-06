import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const SummarizeModal = ({ show, onHide, summary }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Article Summary</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{summary}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SummarizeModal;
