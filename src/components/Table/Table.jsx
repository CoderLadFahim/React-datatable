import './Table.css'
import TableRow from './TableRow.jsx'

export default function Table({data, columns, actions, actionHandler}) {
	const columnHeaders = columns.map(({label}) => label)
	const columnKeys = columns.map(({key}) => key)

	const valuesMappedToColumns = data.map(
		(obj) =>
			columnHeaders
				.map((_col) => columnKeys.map((key) => obj[key]))
				.find((_val, i) => !Boolean(i)) // only keeping the first values
	)

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
				{valuesMappedToColumns.map((rowData, i) => (
					<TableRow actions={actions} key={i} rowData={rowData} actionHandler={actionHandler} />
				))}
			</tbody>
		</table>
	)
}
