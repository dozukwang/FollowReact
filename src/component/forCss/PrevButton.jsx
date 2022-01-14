import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	background-color: ${props => props.color};
	color: black;
`

const PrevButton = () => {
  return (
    <Button color={'yellow'}> 예전버튼 </Button>
  );
};

export default PrevButton;
