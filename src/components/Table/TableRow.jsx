function TableRow({rowData, actionHandler, actions}) {
    return (
        <tr>
            { rowData.map((value, i) => {
				if (i !== rowData.length - 1)
				return (
					<td key={i}>{value.toString()}</td>
				)
				return (
					<>
						<td key={i+1}>{value.toString()}</td>
						<td className="cursor-pointer space-x-3">
                            {actions.map(act => <button onClick={() => actionHandler(rowData, act.name)} className="bg-gray-400 p-2 rounded text-white">{act.label}</button>)}
						</td>
					</>
				)
			}) }
        </tr>
    )
}
;
export default TableRow;
