import { Navigate } from "react-router-dom";
import { connect } from "react-redux";


const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {
	const layout = (props) => props.isAuth ?
		<Component {...props} /> :
		<Navigate to="/auth" />

	return connect(mapStateToProps)(layout)
}


