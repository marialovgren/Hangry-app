import Table from 'react-bootstrap/Table'

const TipsList = ({ tips }) => {

   /*  if (!tips.length) {
        return <p>No new tips</p>
    } */

	return (
		<Table>
			<thead>
				<tr>
					<th></th>
					<th>Namn</th>
					<th>Adress</th>
                    <th>Kommentar</th>
                    <th>Avklarad</th>
				</tr>
			</thead>
			<tbody>
				{tips &&
					tips.map((tips, i) => (
						<tr key={tips.id}>
							<td>{i + 1}</td>
							<td>{tips.restaurantName}</td>
							<td>{tips.restaurantAdress}</td>
                            <td>{tips.restaurantComment}</td>
                            <td>{tips.completed}</td>
						</tr>
					))}
			</tbody>
		</Table>
	)
}

export default TipsList