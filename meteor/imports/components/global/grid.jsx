import React, {Component, PropTypes} from 'react'

import {AgGridReact} from 'ag-grid-react'
import {reactCellRendererFactory} from 'ag-grid-react'
import {reactFilterFactory} from 'ag-grid-react'

import 'ag-grid/dist/styles/ag-grid.css'
import 'ag-grid/dist/styles/theme-fresh.css'

const Grid = React.createClass({
  propTypes: {
    columnDefs: PropTypes.array.isRequired,
    rowData: PropTypes.array.isRequired
  },
  onGridReady(params) {
    this.api = params.api
    this.columnApi = params.columnApi
  },
  componentDidMount() {
    //Autoset column sizes
    var allColumnIds = []
    this.refs.agGrid.gridOptions.columnDefs.forEach(function(columnDef) {
      allColumnIds.push(columnDef.field)
    })
    this.refs.agGrid.gridOptions.columnApi.autoSizeColumns(allColumnIds)

    this.refs.agGrid.gridOptions.api.sizeColumnsToFit()
  },
  render() {
    //TODO Refactor below line out out if/when possible
    this.gridOptions = { columnDefs: this.props.columnDefs, rowData: this.props.rowData}
    return (
      <div className="container">
        <div className="ag-fresh">
          <AgGridReact
            ref="agGrid"
            rowData={this.props.rowData}
            columnDefs={this.props.columnDefs}
						enableColResize="true"
						enableSorting="true"
						enableFilter="true"
            {...this.props}
          />
        </div>
      </div>
    )
  }
})

export default Grid
