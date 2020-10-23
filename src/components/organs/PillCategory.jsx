import React from 'react';
import { Pill } from 'components/tissues'


function PillCategory ({caption, diseases, children}) {
	return (
		<div className="pill-category">
			<h5 className="caption">{caption}</h5>
			{
				diseases.map((disease, i) =>
					<Pill
						name={disease[0]}
						accessName={disease[1]}
						key={i}
					/>
				)
			}
			{children}
		</div>
	)
}


export default PillCategory
