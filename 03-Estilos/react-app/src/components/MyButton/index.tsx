import { ReactNode } from "react";
import styled from "styled-components";

type StyledMyButtonProps = {
	isLoading: boolean;
}

type MyButtonProps = {
	children: ReactNode;
	isLoading: boolean;
	handleClick: () => void;
}

const StyledMyButton = styled.button<StyledMyButtonProps>`
	background-color: ${props => props.isLoading ? "blue" : "green"};
	padding: 25px 30px;
	border-radius: 5px;
`;

function MyButton(props: MyButtonProps) {
	const { handleClick, isLoading, children } = props;

	return (
		<StyledMyButton onClick={handleClick} isLoading={isLoading}>
			{children}
		</StyledMyButton>
	);
}

export default MyButton;
