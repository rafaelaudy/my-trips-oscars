const defaultState = [
	{
		title: 'Pombas',
		description: 'Gondolas, pombas, multidāo e pasta (rica pasta).',
		picture: 'https://lh3.googleusercontent.com/vv3ApFCIZS9ocYq0302bcRwV3zrz-OAN5PYS8ezrmZtDkNNTbIEv7YTE0JG-YvORzHlBVtLTuSwGEQrTBbbM7VZ31yN2FG58GaK7vJzqHiJbgwBSErJYBRfb_p1iELit3bSCpVXUZOX3hsCJ8KGzHogwBY2wUmiD98_uwKw7N5s5AFdyK9jBCM2erKcVrYivn422kDraOv51S0DbgqJFksiL5AfJSem6Ymh3ZzuyG5XwANrVVgJcQys7Nu4qfyKerh-Beu1euQnGMiTbTdKEkmvurAAtuYYbcyMu8gnM3b1r71K082lwq9gF5T5gsvGlpjlUy62cswVE2OcgWMlv8W1kCMIuocfvgwiq9cT8LFLJIRFUzYIow4uTh6HLhfQPOtC_sBS8tPK95GtK-RkAfS4tuEWGYh-g20bF6_52FMH_EJyudyoIMg08g33-MC5DjgCrc7hHnuWrasl2Sv91MORywYJVFatBYj5PD231y91d4TkDJk12GHqF_9y8y3IlYIybWY0sE1VAKPsO9A6O-BB28tEt_ax50KW8QI_nZcDJWTBPNZCEguYA2GgwM7e-Exf-G357YKnYwEOOaSMRgE8WT1nKSztNXOtdWxpFS_F0Pe-WQDdFYR08gqiSQciC-D6g7obUXjJ44ztp0LUUg0wFFnc199pbT0Kdck7V7fg=w1868-h1400-no'
	},
	{
		title: 'Prédios',
		description: 'Gondolas, pombas, multidāo e pasta (rica pasta).',
		picture: 'https://lh3.googleusercontent.com/aq8AgJK4PvkugVo_RKhpZf800V0xeaT9YV3ZzzlAQbkYBJVRiCbrEqhVCj5J7YvrJ77i3TmRlxDMs7UZYi1RunBHl7hw7HpGnajW4bJJ1GC5BNXQ2q4PMUcuSUE7PKIMwad9XkEjRersBBK4DyX_GUXRCPByMnVvWpBvZv66zLdvvoVeC5t74W3xx5I_0GhWaUOey6mcBJwJNy4x-yHw0MTkCQZ9S7kgfMEm2oyVRIYvXB9idADDYoX36o-dEFX4xikxaae8ACn39LEnD3hxtKrnMz6DhXTQUFQEMb6UFA3sleTSxClNcPjbVslP68AZ2_EzLzJlcpQzNR87NnyuTSCfYLpWLrmwb3Ea8toQDhJETNdNOOOXcv8SRgZ2ONB3K3ZmJaLbxInb3qTraflJMCo16r9U_-_AaaOwBZ1qG3Ao86sjgLwOgMCANloOAVlg1aj-i8ZqMMzaEm19ear5LKjbVQTtr-YLzDfACE7LcRPznkIXqpTs2W4EZtUeCGTnWJZBQ1ZR9N_rg-Vj-ci6KGZdSHx3rifgeVae6b78ts8p4dYce0fqvIrVk892jyEcL4Se3P_ZnSg6qoIpUFDPhjUhjYDEQvDMDToO0vMYffzg-ticSQ4oid9-ItuZNAhAotneuiYYV1pM3Xfu2mRG_av8sntSce06Et5viArOXcY=w1050-h1400-no'
	},
	{
		title: 'Soninho',
		description: 'Gondolas, pombas, multidāo e pasta (rica pasta).',
		picture: 'https://lh3.googleusercontent.com/ooObJ72lfNVJGdnUnGnGM0WlxaM5V9SZpSWDU67_J_QK3rS41fUNrR0juOrwbVat1axULw89Q9TXDuERWyfax6N1knqPeen29Ahj8bb2fZZgpv_iuYW_vkFIF-un8AtYKwKA-P0ytf98eGcwajBYq30rxFsLvstgIHbrRAdPlHxp6S73NbwlByne8gEpO5KcwdPZ6K8aT-q01QKnklVjqG8xKlQGiwZgMs2GpNlIJTFOv3qC3df1a8_iYtTeHbXZ1_ejV7pBNsO-j7xFuWGj61ZRSKlhs3RABKZgCj-NFS_gCfGHE4eBJcmTqueHSo1-l17b9GQVu743Z2zfBz9s6UDlrkMKUfhQkGp59vux-NhaODHY4k78SypqVTVwwyYAlkhKKbfbH3Tl2f_KCQMwyaOP3u7NE6j3Nl9oHidNKa7ZCCuySREJDFVuh-pF_7b3t4i6qC8hKWnYGbO6ZMyDbYxwCIjg9ifz9nnNBFa1vFUoUtSpWKfd3ZgXi9m4EoX6WqwncgTg-hcwLfAD9u0y5b5Jgop3YMMrwyXm2ESExaRLG5Ah0OIjRE5AYK5bFocrJi5kFEesxkQ1eweCl6x5bqx5qnUwpAwxcuoCrjSD227xgqxLRMjQARfhCWNBKAduWstcRxcqu3Xy_tmcfIBHgMTC6GZWeZV1mWtjKniXkIQ=w1868-h1400-no'
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