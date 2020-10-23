import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Panel, PillCategory } from 'components/organs';
import { Tab, Field } from 'components/cells';
import { PageNav } from 'components/tissues';
import { medicals } from 'store'
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

function DiagnosisForm (props) {
	const [activeTab, setActiveTab] = useState(4),
	[submitted, setSubmitted] = useState(false);

	const handleSubmission = event => {
		event.preventDefault();
		const {elements} = event.target;
		// group results
		const formData = [...elements].reduce((output, {name, value}) => {
			const [key, subKey] = name.split('-');
			if (!subKey) {
				output[key] = value;
			} else {
				output[key] = {...(output[key] || {}), ...{[subKey]: value}}
				// if (output[key]) {
				// 	output[key][subKey] = value
				// } else {
				// 	output[key] = {[subKey]: value}
				// }
			}
			return output
		}, {})
		console.log(formData)
		medicals.update(s => {
			for (let key in formData) {
            	s[key] = formData[key];
			}
      	})
		setSubmitted(true)
	};

	return submitted ? <Redirect to="/report" /> : (
		<div className="Diagnosis">
			<PageNav />
			<div className="page-form">
				<Panel className="heading">
					<h3>Add Customer</h3>
				</Panel>
				<div className="flex">
					<Panel className="sidebar">
						{
							sidebarTabs.map((tab, i) =>
								<Tab
									className={activeTab === i + 1 ? 'active' : ''}
									text={tab}
									key={i}
									name={i+1}
									clickCallback={setActiveTab}
								/>
							)
						}
					</Panel>
					<Panel className="form-section">
						<form onSubmit={handleSubmission}>
							<PillCategory
								caption="Do you suffer from any of the following?"
								diseases={[
									['Diabetes', 'diabetes'],
									['Blood Pressure Problem', 'bloodPressure'],
									['Thyroid Disease', 'thyroid'],
									['Insulin Resistance', 'insulinResistance'],
									['Kidney Disease', 'kidneyDisease'],
									['Fatty Liver Disease', 'fattyLiverDisease'],
									['Food Dislikes & Allergies', 'foodAllergies']
								]}
							>
								<div className="extras flex jcsb">
									<Field label="When was your last blood test">
										<input type="date" name="lastBloodTest" />
									</Field>

									<Field label="Upload test results">
										<input type="file" name="results"/>
									</Field>
								</div>
							</PillCategory>
							<PillCategory
								caption="Do you suffer from any of the following?"
								diseases={[
									['High Cholestrol Level', 'cholestrol'],
									['High Triglycerides Level', 'triglycerides'],
									['Vitamin D Deficiency', 'vitaminDDeficiency'],
									['Iron Deficiency', 'ironDeficiency'],
								]}
							>
								<Field
									label="Any other deficiencies?"
									style={{marginTop: "var(--gap-x2)"}}
								>
									<input type="text" name="otherDeficiencies"/>
								</Field>
							</PillCategory>
							<PillCategory
								caption="Do you suffer from any of the following?"
								diseases={[
									['Constipation', 'constipation'],
									['Bloating', 'bloating'],
									['Gluten Intolerance', 'gluten'],
									['Lactose Intolerance', 'lactose'],
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
		</div>
	)
};

export default DiagnosisForm;
