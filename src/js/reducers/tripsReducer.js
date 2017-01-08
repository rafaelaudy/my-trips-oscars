const defaultState = [
	{
		title: 'Pombas',
		description: 'Gondolas, pombas, multidāo e pasta (rica pasta).',
		picture: 'https://goo.gl/photos/K75c5FRiRkYvx6zU8'
	},
	{
		title: 'Prédios',
		description: 'Gondolas, pombas, multidāo e pasta (rica pasta).',
		picture: 'https://goo.gl/photos/9HDCRh4ekqp4Ea8X7'
	},
	{
		title: 'Soninho',
		description: 'Gondolas, pombas, multidāo e pasta (rica pasta).',
		picture: 'https://goo.gl/photos/D9wTDWgPS8tSAPNK9'
	}
];

export default (state = defaultState, action) => {
	switch (action.type) {
	case 'ADD': 
		return [...state, action.payload];
	case 'DELETE':
		return [...state.slice(0, action.payload), ...state.slice(action.payload +1) ];
	case 'EDIT':
		return [...state.slice(0, action.payload.index), action.payload.trip ,...state.slice(action.payload.index +1) ];
	default:
		return state;
	}
};