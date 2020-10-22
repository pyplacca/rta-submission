import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'components/cells';


class Pill extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			collapsed: true,
			status: 'No',
			// diagnosisType: null,
			// medication: null,
			// diagnosisYear: null
		};

		this.handleChange = this.handleChange.bind(this)
		this.toggleCollapse = this.toggleCollapse.bind(this)
	};

	toggleCollapse (event) {
		this.setState({
			collapsed: !this.state.collapsed
		})
	};

	handleChange ({target}) {
		const {name, value} = target
		this.setState({
			[name]: value
		});
	};

	render () {
		const {name} = this.props,
		{collapsed, status} = this.state,
		disabled = status === 'No',
		inputName = name.replace(/\s/g, '-').toLowerCase()

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
							name="status"
							id={inputName + "-status"}
							value={this.state.status}
							onChange={this.handleChange}
						>
							<option value="Yes">Yes</option>
							<option value="No">No</option>
						</select>
					</Field>

					<Field label="Year of diagnosis">
						<input
							id={inputName + "-diagnosisYear"}
							type="text"
							disabled={disabled}
						/>
					</Field>

					<Field label="Diagnosis Type">
						<input
							id={inputName + "-diagnosisType"}
							type="text"
							disabled={disabled}
						/>
					</Field>

					<Field label="Medication">
						<input
							id={inputName + "-medication"}
							type="text"
							disabled={disabled}
						/>
					</Field>
				</div>
			</div>
		)
	};
};

// Pill.propTypes = {}

export default Pill;
