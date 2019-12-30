/* istanbul ignore file */
import styled from "styled-components";
import Spinner from "./Spinner";

export default styled(Spinner)`
	margin: 0;
	padding: 0;
	font-weight: 100;
	font-size: 30px;
	color: #a3e1f0;

	span {
		position: relative;
		top: 0.5px;
		display: inline-block;
		text-transform: uppercase;
		opacity: 0;
		transform: rotateX(-90deg);
	}

	.letter {
		-webkit-animation: drop 1.2s ease-in-out infinite;
		animation: drop 1.2s ease-in-out infinite;
	}

	.l {
		-webkit-animation-delay: 1.2s;
		animation-delay: 1.2s;
	}

	.o {
		-webkit-animation-delay: 1.3s;
		animation-delay: 1.3s;
	}

	.a {
		-webkit-animation-delay: 1.4s;
		animation-delay: 1.4s;
	}

	.d {
		-webkit-animation-delay: 1.5s;
		animation-delay: 1.5s;
	}

	.i {
		-webkit-animation-delay: 1.6s;
		animation-delay: 1.6s;
	}

	.n {
		-webkit-animation-delay: 1.7s;
		animation-delay: 1.7s;
	}

	.g {
		-webkit-animation-delay: 1.8s;
		animation-delay: 1.8s;
	}
`;
