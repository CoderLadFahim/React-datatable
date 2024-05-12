function TableRow({rowData, actionHandler, actions, columns}) {
    const parseValueForDisplay = (value) => {
        if (typeof value === 'boolean') return value ? 'Yes' : 'No';
        return value.toString();
    }
    return (
        <tr>
            { columns.map((value, i) => {
				if (i !== columns.length - 1)
				return (
					<td key={i}>{parseValueForDisplay(rowData[value.key.toString()])}</td>
				)
				return (
					<>
						<td key={i+1}>{rowData[value.key.toString()].toString()}</td>
						<td className="cursor-pointer space-x-3">
                            {actions.map((act,i) => <button key={i} onClick={() => actionHandler(rowData, act.name)} className="bg-gray-400 p-2 rounded text-white">{act.label}</button>)}
						</td>
					</>
				)
			}) }
        </tr>
    )
}
;
export default TableRow;
