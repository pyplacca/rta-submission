import React from 'react';


function Tab (props) {
	const {text, className, icon, clickCallback, ...other} = props;

	return (
		<div
			className={"tab " + (className || "")}
			onClick={() => {clickCallback(props.name)}}
			{...other}
		>
			<p className={"text-medium" + (icon ? " flex aic" : "")}>
				{icon ? icon : null}
				{text}
			</p>
		</div>
	)
};

export default Tab;
