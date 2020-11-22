import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Types extends Component {
	renderTypeList() {
		const { pokemonInfo } = this.props;
		const { pokemonType } = pokemonInfo;

		return pokemonType.map(item => {
			return (
				<div key={item} className={`type ${item}`}>
					{item}
				</div>
			);
		});
	}

	render() {
		return (
			<div className="type-list">
				<div className="panel-header">Types</div>
				<div className="type-box">{this.renderTypeList()}</div>
			</div>
		);
	}
}

Types.propTypes = {
	pokemonInfo: PropTypes.object.isRequired,
	pokemonType: PropTypes.array.isRequired
};

const mapStateToProps = state => {
	return {
		...state.pokemon
	};
};

export default connect(mapStateToProps)(Types);
