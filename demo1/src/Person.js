import React from 'react';

const person = (props) => {
	return (
		<div>
			<p onClick={props.myClick}>我是{props.name}  {props.count}岁</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.changed} defaultValue={props.name} />
		</div>
	)
}

export default person