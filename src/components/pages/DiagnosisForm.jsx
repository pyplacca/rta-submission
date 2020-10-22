import React from 'react';
import { Panel, PillCategory } from 'components/organs';
import { Tab, Field } from 'components/cells';
import { Pill } from 'components/tissues';
import 'static/css/diagnosis.css';


const sidebarTabs = [
	'Login Information',
	'Personal Information',
	'Delivery Information',
	'Medical Information',
	'Lifestyle Information',
	'Goal Setting',
	'Subscription',
]

class DiagnosisForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			activeTab: 4,
		};
	};

	handleSubmission(event) {
		event.preventDefault();
		const {elements} = event.target;
		console.log(elements)
	};

	render () {
		const {activeTab} = this.state;
		return (
			<div className="Diagnosis">
				<Panel className="heading">
					<h3>Add Customer</h3>
				</Panel>
				<div className="flex">
					<Panel className="sidebar">
						{
							sidebarTabs.map((tab, i) =>
								<Tab
									name={tab}
									key={i}
									className={activeTab === i + 1 ? 'active' : ''}
								/>
							)
						}
					</Panel>
					<Panel className="form-section">
						<form onSubmit={this.handleSubmission}>
							<PillCategory
								caption="Do you suffer from any of the following?"
								items={[
									'Diabetes',
									'Blood Pressure Problem',
									'Tyroid Disease',
									'Insulin Resistance',
									'Kidney Disease',
									'Fatty Liver Disease',
									'Food Dislikes & Allergies'
								]}
							>
								<div className="extras flex jcsb">
									<Field label="When was your last blood test">
										<input type="date" />
									</Field>

									<Field label="Upload test results">
										<input type="file" />
									</Field>
								</div>
							</PillCategory>
							<PillCategory
								caption="Do you suffer from any of the following?"
								items={[
									'High Cholestrol Level',
									'High Triglycerides Level',
									'Vitamin D Deficiency',
									'Iron Deficiency',
								]}
							>
								<Field
									label="Any other deficiencies?"
									style={{marginTop: "var(--gap-x2)"}}
								>
									<input type="text" />
								</Field>
							</PillCategory>
							<PillCategory
								caption="Do you suffer from any of the following?"
								items={[
									'Constipation',
									'Bloating',
									'Gluten Intolerance',
									'Lactose Intolerance',
								]}
							/>
							<div className="form-buttons flex-rr">
								<button type="submit">Save</button>
								<button>Previous</button>
							</div>
						</form>
					</Panel>
				</div>
			</div>
		)
	};
};

export default DiagnosisForm;
