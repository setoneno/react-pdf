import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class Body extends Component {
    
}

export default class App extends Component {
    constructor(props) {
        super(props);
  this.state = { numPages: null, pageNumber: 1 };
}
onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

//   nextDocumentLoadSuccess = ({ numPages }) => {
//     this.setState({ numPages });
//   };

//   componentWillMount() {
//     setTimeout(() => {
//       this.setState({
//          numPages: null, pageNumber: 1
//       });
//     }, 2000);
//   }

  componentDidMount() {
    setTimeout(() => {
      this.setState(state => ({ pageNumber: state.pageNumber + 100}));
    }, 2000);
  }

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <nav>
          <button onClick={this.goToPrevPage}>Prev</button>
          <button onClick={this.goToNextPage}>Next</button>
        </nav>

        <div style={{ width: 600 }}>
          <Document file="/React.pdf" onLoadSuccess={this.onDocumentLoadSuccess} >
            <Page pageNumber={pageNumber} width={600} />
          </Document>
        </div>

        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    );
  }
}