import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

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
		const { pokeLoad } = this.props;
		return (
			<div className="screen type-list">
				<div className="panel-header">Types</div>
				{pokeLoad ? (
					<Loader type="Oval" color="#00BFFF" height={150} width={150} />
				) : (
					<div className="type-box">{this.renderTypeList()}</div>
				)}
			</div>
		);
	}
}

Types.propTypes = {
	pokemonInfo: PropTypes.object.isRequired,
	pokemonType: PropTypes.array.isRequired,
	pokeLoad: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
	return {
		...state.pokemon
	};
};

export default connect(mapStateToProps)(Types);
