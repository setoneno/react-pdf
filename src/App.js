import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


// export default class App extends Component {
//     render() {
//       return (
//         <div>
//           <Body />
//         </div>
//       );
//     }
//   }

export default class App extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { numPages: null, pageNumber: 1 };
    //   }
  state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
      this.setState({ numPages });
    };

  nextDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
   };

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

//   nextDocumentLoadSuccess = ({ numPages }) => {
//     this.setState({ numPages });
//   };


  componentWillMount() {
    setTimeout(() => {
      const { pageNumber, numPages } = this.state;
      this.setState(state => ({ pageNumber: state.pageNumber }, 
      { value: (
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
      </div>) }));
    });
  }

  componentDidMount() {
    setTimeout(() => {
      const { pageNumber, numPages } = this.state;
      this.setState(state => ({ pageNumber: state.pageNumber }, 
      { value: (
        <div>
        <nav>
          <button onClick={this.goToPrevPage}>Prev</button>
          <button onClick={this.goToNextPage}>Next</button>
        </nav>
      <div style={{ width: 600 }}>
        <Document file="/linux.pdf" onLoadSuccess={this.nextDocumentLoadSuccess} >
          <Page pageNumber={pageNumber} width={600} />
        </Document>
      </div>
      <p>
          Page {pageNumber} of {numPages}
      </p>
      </div>) }));
    },5000);
  }

  render() {
    // const { pageNumber, numPages } = this.state;
    
    return (
      <div>
         {this.state.value}
      </div>
    );
  }
}