import React from "react";
import styled from "@emotion/styled";
import { Table } from "reactstrap";
const data = [
	{
		f: "Jill",
		s: "Smit",
		a: "91"
	},
	{
		f: "Pat",
		s: "Smit",
		a: "91"
	},
	{
		f: "Pete",
		s: "Smit",
		a: "1"
	}
];

const MyTable = () => {
	const clicker = i => console.log(i);
	const tableRows = data.map((row, i) => (
		<tr key={i} onClick={() => clicker(i)}>
			<td>{row.f}</td>
			<td>{row.s}</td>
			<td>{row.a}</td>
		</tr>
	));
	return (
		<table>
			<tbody>
				<tr>
					<th>Firstname</th>
					<th>Lastname</th>
					<th>Age</th>
				</tr>
				{tableRows}
			</tbody>
		</table>
	);
};

const styleSide = { float: "left", display: "inline", width: "49%" };
class Ting extends React.Component {
	render() {
		return (
			<>
				<div>
					<img
						style={styleSide}
						src={
							"https://media.licdn.com/dms/image/C4E03AQEyVtEHdm_0oQ/profile-displayphoto-shrink_200_200/0?e=1570665600&v=beta&t=7IvvLHSRzWMAy3fBPC9UnSt6G0NNgyPtWNJI_7nmvew"
						}
						alt="boohoo"
						className="img-responsive"
					/>
				</div>
				<div style={styleSide}>
					<p>First</p>
					<h3>Ting</h3>
				</div>
				;
			</>
		);
	}
}
class TableExample extends React.Component {
	render() {
		return (
			<Table hover striped className="mb-0">
				<thead>
					<tr>
						<th>#</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Username</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">1</th>
						<td>
							<Ting />
						</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
					<tr>
						<th scope="row">3</th>
						<td>Larry</td>
						<td>the Bird</td>
						<td>@twitter</td>
					</tr>
				</tbody>
			</Table>
		);
	}
}

const Fancy = styled(TableExample)`
	color: turquoise;
`;

export default Fancy;
//export default Fancy;
