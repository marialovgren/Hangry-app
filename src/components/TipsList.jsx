

const TipsList = ({ tips }) => {

	return (
		<div className="overflow-x-auto">
			<table className="table w-full">
				<thead>
					<tr>
						<th>Nr.</th>
						<th>Namn</th>
						<th>Adress</th>
					</tr>
				</thead>
				<tbody>
					{tips &&
						tips.map((tips, i) => (
							<tr key={tips.id}>
								<th>{i + 1}</th>
								<td>{tips.restaurantName}</td>
								<td>{tips.restaurantAdress}</td>
                                <td>{tips.restaurantComment}</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	)
}

export default TipsList