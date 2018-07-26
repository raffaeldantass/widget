const list = document.getElementById('list');
const request = new XMLHttpRequest();
request.open('GET', 'http://trampos.co/api/oportunidades.json', true);

// Gera um elemento <a> para ser inserido dentro do card
const getLinkItem = (info) => {
	const linkItem = document.createElement("a");
	linkItem.href = info.opportunity.permalink;
	linkItem.className = "link-item";

	return linkItem;
}

// Gera um elemento <li> para ser inserido dentro do card
const getListItem = (info) => {
	const listItem = document.createElement("li");
	listItem.className = "list-item";

	return listItem;
}

request.onload = () => {
	if(request.status >= 200 && request.status < 400) {
		const data = JSON.parse(request.responseText);
		const resp = data
		.map((info) => {
			const linkItem = getLinkItem(info);
			const listItem = getListItem(info);

			const textoInfo = document.createTextNode(info.opportunity.name);

			linkItem.appendChild(textoInfo);
			listItem.appendChild(linkItem);
			list.appendChild(listItem);
		})

		return resp; 
	} else {
		console.log('error');
	}
}

request.onerror = () => {
	return 'deu erro';
}

request.send(); 