import React from 'react';


function Tab ({name, className}) {
	return (
		<div className={"tab " + (className || '')}>
			{name}
		</div>
	)
};

export default Tab;
