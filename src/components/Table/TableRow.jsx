function TableRow({rowData}) {
    return (
        <tr>
            { rowData.map((value, i) => <td key={i}>{value.toString()}</td>) }
        </tr>
    )
}
;
export default TableRow;
