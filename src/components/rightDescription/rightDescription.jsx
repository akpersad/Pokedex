import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class RightDescription extends Component {
	render() {
		return <div>RightDescription</div>;
	}
}

RightDescription.propTypes = {};

const mapStateToProps = state => {
	return {
		...state.pokemon
	};
};

export default connect(mapStateToProps)(RightDescription);
