import {Daily} from "../components/UI/clientCalendar/Daily";
import React, {FC, ReactElement, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {requestBusinessBySlug} from "../utils/requests/business";
import NotFoundPage from "./NotFoundPage";
import {BusinessInfo} from "../utils/interfaces";

const Business: FC = (): ReactElement => {
	const {slug} = useParams();
	const [business, setBusiness] = useState<BusinessInfo| null>(null);
	const [loading, setLoading] = useState(true);
	const [notFound, setNotFound] = useState(false);

	useEffect(() => {
		requestBusinessBySlug(slug as string)
			.then((biz:BusinessInfo): void => {
				setBusiness(biz)
				setLoading(false);
			})
			.catch((err):void =>{
				console.log(err)
				if (err.response.status === 404) {
					setNotFound(true);
				}
				setLoading(false);
			})
	}, [slug]);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (notFound) {
		return <NotFoundPage />;
	}

	return (
		<div>
			<div>
				here we must give to business client information about current business
			</div>
			<strong>
				{JSON.stringify(business)}
			</strong>
			<div>
				because our main point as SAAS this page
			</div>
			<div>
				schedule for 1 week
			</div>
			<Daily/>
		</div>
	);
};

export default Business;
