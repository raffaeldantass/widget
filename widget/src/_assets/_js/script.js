const list = document.getElementById('list');
const request = new XMLHttpRequest();


request.open('GET', 'http://trampos.co/api/oportunidades.json', true);

request.onload = () => {
	if(request.status >= 200 && request.status < 400) {
		const data = JSON.parse(request.responseText);
		const resp = data
		.map((info) => {
			const linkItem = document.createElement("a");
			linkItem.href = info.opportunity.permalink;
			linkItem.className = "link-item"
			
			const listItem = document.createElement("li");
			listItem.className = "list-item";

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