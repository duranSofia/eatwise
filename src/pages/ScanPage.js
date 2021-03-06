import React, { Component } from "react";
import BarCodeReader from "../Components/BarCodeReader/BarCodeReader";
import Footer from "../Components/Footer/Footer";

export default class ScanPage extends Component {
  render() {
    return (
      <div>
        <h2 className="page-header">Scan the barcode:</h2>
        <BarCodeReader />
        <Footer />
      </div>
    );
  }
}
