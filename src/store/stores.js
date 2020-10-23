import { Store } from 'pullstate';

export const medicals = new Store({
	bloating: {},
	bloodPressure: {},
	cholestrol: {},
	constipation: {},
	diabetes: {},
	fattyLiverDisease: {},
	foodAllergies: null,
	gluten: {},
	hypertension: {},
	healthProblems: null,
	insulinResistance: {},
	ironDeficiency: {status: 'No'},
	kidneyDisease: {},
	lactose: {},
	lastBloodTest: null,
	thyroid: {},
	triglycerides: {},
	vitaminDDeficiency: {status: 'No'},
	otherDeficiencies: null,
	results: null
});

export const userInfo = new Store({
	'Date Of Birth': '2020-05-09',
	'Email': 'rooney@email.com',
	'Gender': 'Male',
	'Mobile Number': '0022445',
	'Nationality': 'Gambian',
	'Occupation': 'er',
});
