import React from 'react';


function Field ({label, children, ...others}) {
	return (
		<section className="input-field flex-c" {...others}>
			{
				label
				?
				<label>{label}</label>
				:
				null
			}
			{children}
		</section>
	)
}

export default Field;
