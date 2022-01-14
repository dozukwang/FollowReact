import React from 'react';
import styled from 'styled-components';
import PrevButton from './PrevButton';

const NewButton = styled.button`
	background-color: black;
	color: white;
`

const UpdatedButton = styled(NewButton)`
  background-color: pink;
  color: green;
  &:hover {
    background-color: red;
  }
`

const Button = styled.button`
	background-color: yellow;
`

const ReversedButton = props => 
<Button {...props} children={props.children.split('').reverse()} />

const FollowCss = (props) => {

  const { name } = props

  return (
    <div>
      <h2>CSS 연습페이지</h2>
      <NewButton>새로운버튼: {name}</NewButton>
      <PrevButton />
      <UpdatedButton> 업데이트된 버튼(hover) </UpdatedButton>
      <br/>
      <UpdatedButton as={'a'} href='#'> 링크로 바꾼 버튼스타일 </UpdatedButton>
      <br/>
      <Button > 보통 출력 </Button>
	    <Button as={ReversedButton}> 거꾸로 출력 </Button>
    </div>
  );
};

export default FollowCss;
