import React, { useState } from 'react';
import { Tab, Icons } from 'components/cells';
import { PageNav, Table } from 'components/tissues';
import { userInfo, medicals } from 'store';
import 'static/css/report.css';


function BottomRow ({data}) {
	return (
		<div className="bottom-row">
			{
				data.map((col, i) => {
					const [title, text] = col;
					return (
						<div className="extra-data" key={i}>
							<p className="text-large">{title}</p>
							<p>{text}</p>
						</div>
					)
				})
			}
		</div>
	)
}

function Report (props) {
	const [active, setActive] = useState('user-profile')
	const {
		foodAllergies: fas,
		diabetes: dbs,
		hypertension: hyp,
		thyroid: thy,
		healthProblems: hps,
		lastBloodTest: lbt,
		cholestrol: chl,
		triglycerides: trg,
		ironDeficiency: ird,
		vitaminDDeficiency: vdd,
	} = medicals.useState(s => s)

	return (
		<div className="Report">
			<PageNav />
			<div className="page-main">
				<div className="header flex aic jcsb">
					<div className="short-info">
						<h1 className="title">Wayne Rooney</h1>
						<p className="subtitle">TONE UP 1400</p>
					</div>
					<button name="edit">Edit Profile</button>
				</div>
				<div className="page-information flex-c">
					<div className="tabs flex jcsb">
						{
							[
								['User Profile', <Icons.user />],
								['Goal Tracking', <Icons.xOctagon />],
								['Appointments', <Icons.calendar />],
								['Selections', <Icons.file />],
								['Finance', <Icons.briefcase />],
								['Settings', <Icons.settings />],
							].map((item, i) => {
								const [text, iconName] = item,
								name = text.toLowerCase().replace(/\s/g, '-');
								return <Tab
									text={text}
									name={name}
									icon={iconName}
									key={i}
									className={active === name ? 'active' : ''}
									clickCallback={setActive}
								/>
							})
						}
					</div>
					<button name="print">
						<Icons.printer />
						Print
					</button>
					<section id="personal-info">
						<h3 className="section-header">Personal Information</h3>
						<div className="details">
							{
								Object.entries(userInfo.useState(s => s))
								.map((entry, i) => {
									const [title, text] = entry;
									return (
										<div className="extra-data" key={i}>
											<p className="text-large">{title}</p>
											<p>{text}</p>
										</div>
									)
								})
							}
						</div>
					</section>
					<section id="medical-info">
						<h3 className="section-header">Medical Information</h3>
						<Table
							headers={[
								'suffer from',
								'status',
								'year of diagnosis',
								'type',
								'medication',
							]}
							rows={[
								['Diabetes',
								dbs.status, dbs.yearOfDiagnosis, dbs.type, dbs.medication],
								['Hypertension',
								hyp.status, hyp.yearOfDiagnosis, hyp.type, hyp.medication],
								['Thyroid',
								thy.status, thy.yearOfDiagnosis, thy.type, thy.medication],
							]}
						/>
						<BottomRow
							data={[
								['Food Allergies', fas ? fas.status : 'None'],
								['Any other health problems', hps ? hps.status : 'None'],
								['When was your last blood test', lbt],
							]}
						/>
						<Table
							headers={['suffer from','range', 'medication']}
							rows={[
								['Cholestrol', chl.range, chl.medication],
								['Triglycerides', trg.range, trg.medication],
							]}
						/>
						<BottomRow
							data={[
								['Iron Deficiency', ird.status],
								['Vitamin D Deficiency', vdd.status],
							]}
						/>
					</section>
				</div>
			</div>
		</div>
	)
};

export default Report;
