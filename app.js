const loadData = async () => {
	const API = 'https://star-cors.herokuapp.com/';

	const responses = await Promise.all([
		fetch(`${API}films`),
		fetch(`${API}people`),
		fetch(`${API}vehicles`),
		fetch(`${API}starships`)
	]);

	const [ films, people, vehicles, starships ] = await Promise.all(responses.map((response) => response.json()));

	renderData(films, 'films');
	renderData(people, 'people');
	renderData(vehicles, 'vehicles');
	renderData(starships, 'starships');
};

const renderData = (dataList, display) => {
	console.log(dataList.results);
	HTML = dataList.results
		.map((datum) => {
			return `<li>${datum.title ? datum.title : datum.name}</li>`;
		})
		.join('');
	document.querySelector(`#${display}`).innerHTML = `<ul>${display}: ${HTML}</ul>`;
};

loadData();
