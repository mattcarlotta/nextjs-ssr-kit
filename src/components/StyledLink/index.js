import React, { PureComponent } from "react";
import Link from "next/link";
import PropTypes from "prop-types";

class StyledLink extends PureComponent {
	render = () => (
		<Link href={this.props.href} prefetch={false}>
			<a {...this.props} className="link">
				{this.props.children}
			</a>
		</Link>
	);
}

StyledLink.propTypes = {
	href: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

export default StyledLink;
