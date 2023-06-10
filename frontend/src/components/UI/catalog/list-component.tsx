import React, {FC} from 'react';
import {Paper, Box} from "@mui/material";
import styled from "styled-components";
import {BusinessInfo} from "../../../utils/interfaces";
import {AiFillHeart} from "react-icons/ai";


interface ListPropsInterface {
	biz: BusinessInfo
}
const ListComponent: FC<ListPropsInterface> = ({biz}) => {
	return (
		<ListItems>
			<Paper
				sx={{
					mt: '16px',
					p: '8px',
					background:'#f8f9fc',
					alignItems:'flex-start',
					display:'flex',
					flexWrap:'wrap',
					borderRadius: '24px',
					gap:'8px',
					position: 'relative',
					zIndex:0
			}}>
				<div style={{position:'absolute',right:0,top:0}}>
					<AiFillHeart size={30} color="red" style={{margin:'16px'}}/>
				</div>
				<div style={{display:'flex',flexDirection:'column', overflow:'hidden'}}>
					<a href={`/biz/${biz.slug}`}>
						<Box
							component="img"
							sx={{
								maxHeight: { xs: '120px', md: '180px' },
								width: '100%',
								objectFit: 'cover',
								borderRadius: '24px'
							}}
							alt={biz.name}
							src={`https://penji.co/wp-content/uploads/2022/08/8-cameo.jpeg`}
						/>
					</a>
				</div>
				<div>
					<h2><a href={`/biz/${biz.slug}`} style={{textDecoration:"none", color:"#384047"}}>{biz.name}</a></h2>
					<div>My Service</div>
				</div>
				<div>
					<div>Phone: {biz.phoneNumber}</div>
					<div>Address: {biz.address}</div>
				</div>
			</Paper>
		</ListItems>
	);
};

export default ListComponent;
const ListItems = styled.li`
  display: list-item;
  background-color: #f8f9fc;
  border-radius: 24px;
`
