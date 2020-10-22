import React from 'react';


function Panel ({children, className}) {
	return (
		<div className={"Panel " + (className || '')}>
			{children}
		</div>
	)
};

export default Panel
