const AdminList = ({ admin }) => {

	return (
		<div className="overflow-x-auto">
			<table className="table w-full">
				<thead>
					<tr>
						<th>List</th>
						<th>Id</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{admin &&
						admin.map((admins, i) => (
							<tr key={admins.id}>
								<th>{i + 1}</th>
								<td>{admins.id}</td>
								<td>{admins.email}</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	)
}

export default AdminList