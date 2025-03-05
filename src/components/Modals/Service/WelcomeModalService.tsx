'use client';
import React, { useEffect, useState } from 'react';
import WelcomeModal from '../WelcomeModal';

const WelcomeModalClient: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const isFirstVisit = localStorage.getItem('isFirstVisit') === null;
    if (isFirstVisit) {
      setShowModal(true);
      localStorage.setItem('isFirstVisit', 'false');
    }
  }, []);

  const handleCloseModal = () => setShowModal(false);

  return <WelcomeModal show={showModal} handleClose={handleCloseModal} />;
};

export default WelcomeModalClient;