import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function ChangeButton(props) {
	console.log("changenonaka")
  return (
    <a href={props.link} onClick={() => props.onClick()}>
      {props.value}
    </a>
  );
}

let a = 0;
console.log("letnoato")

export default class App extends Component {
      state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
		this.setState({ numPages });
		console.log("daunro-doowata")
	};
	


  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));
		
	
			fff() {
				const { pageNumber, numPages } = this.state;
				this.setState(state => ({ pageNumber: state.pageNumber }, 
				{ value: (
					<div>
				<div style={{ width: 600 }}>
					<Document file="/React.pdf" onLoadSuccess={this.onDocumentLoadSuccess} >
						<Page pageNumber={a } width={600} />
					</Document>
				</div>
				<p>
						Page {pageNumber} of {numPages}
				</p>
				</div>) }));
			}

  

  first() {
      const { pageNumber, numPages } = this.state;
      this.setState(state => ({ pageNumber: state.pageNumber }, 
      { value: (
        <div>
      <div style={{ width: 600 }}>
        <Document file="/React.pdf" onLoadSuccess={this.onDocumentLoadSuccess} >
          <Page pageNumber={a} width={600} />
        </Document>
      </div>
      <p>
          Page {pageNumber} of {numPages}
      </p>
      </div>) }));
  }

  second() {
      const { pageNumber, numPages } = this.state;
      this.setState(state => ({ pageNumber: state.pageNumber },
      { value: (
        <div>
      <div style={{ width: 600 }}>
        <Document file="/linux.pdf" onLoadSuccess={this.onDocumentLoadSuccess} >
          <Page pageNumber={a} width={600} />
        </Document>
      </div>
      <p>
          Page {pageNumber} of {numPages}
      </p>
      </div>) }));
  }


  render() {
		console.log("renderato")

		function Hoge(props) {
			console.log(a);
			a = a + 1;
			console.log(a);
			return (
				<a href={props.link} onClick={() => props.onClick()}>
					{props.value}
				</a>
			);
		}
    return (
      <div>
        <nav>
          <button onClick={this.goToPrevPage}>Prev</button>
          <Hoge onClick={() => this.fff()}/>
				
        </nav>
        <ul>
					<li>
					<Hoge link="#3" value="test" onClick={() => this.fff()} />
					</li>
          <li>
            <ChangeButton link="/" value="main" onClick={() => this.state()} />
          </li>
          <li>
            <ChangeButton link="#1" value="page1" onClick={() => this.first()} />
          </li>
          <li>
            <ChangeButton link="#2" value="page2" onClick={() => this.second()} />
          </li>
        </ul>
        {this.state.value}
        </div>
    );
  }
}

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Body />
//       </div>
//     );
//   }
// }