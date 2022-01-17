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
				foto: [
					{url: 'foto.jpg', leganda: 'Vereador'}
				]
			},
			{
				numero: '20000',
				nome: 'Beltrano de tal',
				partido: 'EFGH',
				foto: [
					{url: 'foto.jpg', leganda: 'Vereador'}
				]
			},
		]
	},
	{
		titulo: 'PREFEITO',
		numeros: '2',
		candidatos: [
			{
				numero: '10',
				nome: 'Allien Vicentino',
				partido: 'HPP',
				vice: 'Predador',
				fotos: [
					{url: 'foto.jpg', leganda: 'Prefeito'},
					{url: 'foto.jpg', leganda: 'Vice-Prefeito', small: true}
				]
			},
			{
				numero: '20',
				nome: 'Rabito Silver',
				partido: 'PPS',
				vice: 'Codar',
				fotos: [
					{url: 'foto.jpg', leganda: 'Prefeito'},
					{url: 'foto.jpg', leganda: 'Vice-Prefeito', small: true}
				]
			},
		]
	}
];