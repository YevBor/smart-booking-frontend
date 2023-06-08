import React from 'react';
import {Container} from "@mui/material";

const NotFoundPage = () => {
	return (
		<Container>
			<h1 style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '80vh',
				textAlign:'center'
			}}>404 Not Found</h1>
		</Container>
	);
};

export default NotFoundPage;
