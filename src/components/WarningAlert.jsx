import Alert from 'react-bootstrap/Alert'

const WarningAlert = ({ message }) => {
	return (
		<Alert variant="warning">
			<h2 className="h4">Error!</h2>
			{message}
		</Alert>
	)
}

export default WarningAlert