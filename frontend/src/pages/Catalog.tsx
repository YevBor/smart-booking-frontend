import React, {useEffect, useState} from 'react';
import {requestBusiness} from "../services/business/business"
import {Container, Paper} from "@mui/material";
import {BusinessInfo} from "../utils/interfaces";

const Catalog = () => {
	const [business,setBusiness] = useState<BusinessInfo[] | null>(null);
	useEffect(() => {
		const fetcher = async () => {
			const response = await requestBusiness();
			setBusiness(response);
		}
		fetcher().then()
	}, []);
	return (
		<Container>
			<h1>Catalog</h1>
			{
				business && business.map((biz: BusinessInfo)=>(
					<Paper key={biz.id} sx={{ mt:'8px', p:'8px'}}>
						<pre>
							{JSON.stringify(biz, null, 2)}
						</pre>
					</Paper>
				))
			}

		</Container>
	);
};

export default Catalog;
