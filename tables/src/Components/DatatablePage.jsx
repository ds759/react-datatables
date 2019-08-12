import React from "react";
import { MDBDataTable } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import styled from "@emotion/styled";

const DatatablePage = props => {
	const handleRowClick = () => console.log("clicked");
	return (
		<MDBDataTable
			className={props.className}
			entries={props.data.rows.length}
			striped
			bordered
			pagination="false"
			hover
			data={props.data}
		/>
	);
};

const Fancy = styled(DatatablePage)`
	margin-left: 50px;
	margin-right: 50px;
	margin-top: 50px;
	margin-bottom: 50px;
`;

export default Fancy;
