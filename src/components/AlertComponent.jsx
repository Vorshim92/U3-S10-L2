import React from "react";
import Alert from "react-bootstrap/Alert";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: true,
    };
    this.handleCloseAlert = this.handleCloseAlert.bind(this);
  }

  handleCloseAlert() {
    this.setState({ showAlert: false });
  }

  render() {
    return (
      <div className="container mt-4 text-white">
        <h2 className="text-center">Benvenuto nel nostro negozio!</h2>
        {this.state.showAlert && (
          <Alert variant="info" onClose={this.handleCloseAlert} dismissible>
            Benvenuto! Siamo felici di averti qui. Dai un'occhiata ai nostri prodotti e non esitare a contattarci se hai domande.
          </Alert>
        )}
      </div>
    );
  }
}
export default Welcome;
