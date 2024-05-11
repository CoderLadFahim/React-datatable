import './Table.css'
import TableRow from './TableRow.jsx'

export default function Table({data, columns, actions, actionHandler}) {
	const columnHeaders = columns.map(({label}) => label)

	return (
		<table className="content-table">
			<thead>
				<tr>
					{columnHeaders.map((header, i) => (
						<th key={i}>{header}</th>
					))}
					{(actions || actions?.length) && <th>Actions</th>}
				</tr>
			</thead>
			<tbody>
				{data.map((rowData, i) => (
					<TableRow
					    actions={actions}
					    key={i}
					    rowData={rowData}
					    columns={columns}
					    actionHandler={actionHandler}
					/>
				))}
			</tbody>
		</table>
	)
}
