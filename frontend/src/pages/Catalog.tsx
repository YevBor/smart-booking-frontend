import React, {useEffect, useState} from 'react';
import {requestBusiness} from "../utils/requests";

const Catalog = () => {
	const [business,setBusiness] = useState<any>(null);
	useEffect(() => {
		const fetcher = async () => {
			const response = await requestBusiness();
			setBusiness(response);
		}
		fetcher().then()
	}, []);
	return (
		<div>
			<h1>Catalog</h1>
			{JSON.stringify(business)}
		</div>
	);
};

export default Catalog;
