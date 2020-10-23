import React from 'react';
import { Field } from 'components/cells';


class Pill extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
			collapsed: true,
			status: 'No',
		};

		this.toggleCollapse = this.toggleCollapse.bind(this)
	};

	toggleCollapse (event) {
		this.setState({
			collapsed: !this.state.collapsed
		})
	};

	render () {
		const {name, accessName} = this.props,
			{collapsed, status} = this.state,
			disabled = status === 'No';

		return (
			<div className="disease collapsible">
				<h5
					className="pill title"
					onClick={this.toggleCollapse}
				>
					{name}
				</h5>
				<div
					className={`fields ${
						collapsed ? 'collapsed' : 'expanded'
					}`}
				>
					<Field label="Status*">
						<select
							// name="status"
							name={accessName + "-status"}
							value={this.state.status}
							onChange={
								({target}) => this.setState({
									status: target.value
								})
							}
						>
							<option value="Yes">Yes</option>
							<option value="No">No</option>
						</select>
					</Field>

					<Field label="Year of diagnosis">
						<input
							name={accessName + "-diagnosisYear"}
							type="text"
						/>
					</Field>

					<Field label="Diagnosis Type">
						<input
							name={accessName + "-diagnosisType"}
							type="text"
							disabled={disabled}
						/>
					</Field>

					<Field label="Medication">
						<input
							name={accessName + "-medication"}
							type="text"
							disabled={disabled}
						/>
					</Field>
				</div>
			</div>
		)
	};
};

export default Pill;
