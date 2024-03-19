import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

const Welcome = () => {
  const [showAlert, setShowAlert] = useState(true);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="container mt-4 text-white">
      <h2 className="text-center">Benvenuto nel nostro negozio!</h2>
      {showAlert && (
        <Alert variant="info" onClose={handleCloseAlert} dismissible>
          Benvenuto! Siamo felici di averti qui. Dai un'occhiata ai nostri prodotti e non esitare a contattarci se hai domande.
        </Alert>
      )}
    </div>
  );
};

export default Welcome;
