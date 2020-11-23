import React, { Component } from "react";

class PokedexDivider extends Component {
	renderDividerSection() {
		const gapCount = 3;
		const dividerHTML = [];
		for (let i = 0; i < gapCount; i++) {
			const tempGapHTML = <div key={`gap${i}`} className="gap" />;
			const tempHingeHTML =
				gapCount - i - 1 > 0 ? <div key={`hing${i - 1}`} className="hinge" /> : "";
			dividerHTML.push(tempGapHTML);
			dividerHTML.push(tempHingeHTML);
		}
		return dividerHTML;
	}

	render() {
		return <div className="divider">{this.renderDividerSection()}</div>;
	}
}

export default PokedexDivider;
