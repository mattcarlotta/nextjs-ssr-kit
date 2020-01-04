import React from "react";
import PropTypes from "prop-types";
import FlexCenter from "~components/FlexCenter";
import FadeIn from "~components/FadeIn";

const Spinner = ({ className }) => (
	<FadeIn timing="0.6s">
		<FlexCenter>
			<h1 className={className}>
				{["l", "o", "a", "d", "i", "n", "g"].map(letter => (
					<span key={letter} className={`letter ${letter}`}>
						{letter}
					</span>
				))}
			</h1>
		</FlexCenter>
	</FadeIn>
);

Spinner.propTypes = {
	className: PropTypes.string.isRequired,
};

export default Spinner;
