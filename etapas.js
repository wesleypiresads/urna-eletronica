// Arquivo formato JSON
let etapas = [
	{
		titulo: 'VEREADOR',
		numeros: 5,
		candidatos: [
			{
				numero: '10000',
				nome: 'Fulano de tal',
				partido: 'ABCD',
				fotos: [
					{url: 'pref001.jpg', legenda: 'Vereador'}
				]
			},
			{
				numero: '20000',
				nome: 'Beltrano de tal',
				partido: 'EFGH',
				fotos: [
					{url: 'pref002.jpg', legenda: 'Vereador'}
				]
			},
		]
	},
	{
		titulo: 'PREFEITO',
		numeros: 2,
		candidatos: [
			{
				numero: '10',
				nome: 'Allien Vicentino',
				partido: 'HPP',
				vice: 'Predador',
				fotos: [
					{url: 'pref001.jpg', legenda: 'Prefeito'},
					{url: 'pref002.jpg', legenda: 'Vice-Prefeito', small: true}
				]
			},
			{
				numero: '20',
				nome: 'Rabito Silver',
				partido: 'PPS',
				vice: 'Codar',
				fotos: [
					{url: 'pref001.jpg', legenda: 'Prefeito'},
					{url: 'pref002.jpg', legenda: 'Vice-Prefeito', small: true}
				]
			},
		]
	}
];