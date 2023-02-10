import React from "react";
import { ExcelRenderer, OutTable } from "react-excel-renderer";

class ExcelRequestsImport extends React.Component {
  state = {
    cols: [],
    rows: [],
  };

  uploadFile = (event) => {
    let fileObj = event.target.files[0];
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        const { cols, rows } = resp;
        this.setState(
          {
            cols: cols,
            rows: rows,
          },
          () => {
            const data = [...rows];
            data.shift();
            this.props.uploadHandler(data);
          }
        );
      }
    });
  };
  render() {
    return (
      <div className="excel-import-container">
        <div className="file-upload">
          <label>Upload File</label>
          <input type="file" onChange={this.uploadFile} />
          <button>+</button>
        </div>
        <div className="excel-table-wrapper">
          <OutTable
            data={this.state.rows}
            columns={this.state.cols}
            tableClassName="excel-table"
          />
        </div>
      </div>
    );
  }
}

export default ExcelRequestsImport;
