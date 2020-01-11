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

const renderData = (dataList, id) => {
	HTML = dataList.results
		.map((datum) => {
			return `<li>${datum.title ? datum.title : datum.name}</li>`;
		})
		.join('');
	document.querySelector(`#${id}`).innerHTML = `<input type='text' id='${id}Form'><ul>${id[0].toUpperCase() +
		id.slice(1)}: ${HTML}</ul>`;

	console.log(sortByNameAsTyped(dataList, id, 'The'));
};

const sortByNameAsTyped = (dataList, id, searchValue) => {
	return dataList;
};

loadData();
