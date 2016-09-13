import React, { PropTypes, Component } from 'react'
import {reactCellRendererFactory} from 'ag-grid-react'
import {reactFilterFactory} from 'ag-grid-react'
import EditColumnAg from '../components/global/ag/editLinkAg'

export default [
	{field: "name", headerName: "Name"},
	{field: "phone", headerName: "Phone"},
	{field: "edit",
		headerName: "",
		cellRenderer: reactCellRendererFactory(EditColumnAg)
	}
]

