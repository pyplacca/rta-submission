import React from 'react';
import { Pill } from 'components/tissues'


function PillCategory ({caption, items, children}) {
	return (
		<div className="pill-category">
			<h5 className="caption">{caption}</h5>
			{
				items.map(
					(disease, i) => <Pill name={disease} key={i}/>
				)
			}
			{children}
		</div>
	)
}


export default PillCategory
