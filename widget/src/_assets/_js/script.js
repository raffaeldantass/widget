const request = new XMLHttpRequest();
request.open('GET', 'http://trampos.co/api/oportunidades.json', true);

request.onload = () => {
	if(request.status >= 200 && request.status < 400) {
		const data = JSON.parse(request.responseText);
		const resp = data
		.map((info) => {
      console.log(info.opportunity.name)
		})

		return resp 
		console.log(resp);
	} else {
		console.log('error');
	}
}

request.onerror = () => {
	return 'deu erro';
}

request.send(); 