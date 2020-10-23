import React from 'react';


function Table (props) {
	const {rows, headers} = props
	return (
		<table>
			<thead>
				<tr className="cap">
					<th colSpan={headers.length}></th>
				</tr>
				<tr>
					{ headers.map((head, i) => <th key={i}>{head}</th>) }
				</tr>
			</thead>
			<tbody>
				{
					rows.map((row, i) =>
						<tr key={i}>
							{ row.map((data, i) => <td key={i}>{data}</td>)}
						</tr>
					)
				}
			</tbody>
		</table>
	)
};

export default Table;
