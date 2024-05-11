import './Table.css'
import TableRow from './TableRow.jsx'

export default function Table({data, columns, actions}) {
	const columnHeaders = columns.map((col) => col.label)
	const columnKeys = columns.map((col) => col.key)

	const valuesMappedToColumns = data.map((obj) =>
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
					{/* {(actions || actions?.length) && <th>Actions</th>} */}
				</tr>
			</thead>
			<tbody>
				{valuesMappedToColumns.map((rowData, i) => (
					<TableRow key={i} rowData={rowData} />
				))}
			</tbody>
		</table>
	)
}
