export const requestBusiness = async () => {
	return await fetch('http://localhost:4000/business', {
		method: 'GET'
	})
		.then((response: Response) => response.json())
}
