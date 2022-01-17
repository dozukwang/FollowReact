import React, { useState } from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
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

const AttrsButton = styled.button.attrs(props => ({
	type: 'submit', //고정된 값 props
	size: props.size || '200px', //변하는 값 props
}))`
	background-color: blue;
	color: white;
	width: ${props => props.size};
  opacity: ${props => props.opacity? props.opacity : 1};
`
// 애니메이션을 생성
const changeRainbow = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

//styled 컴포넌트생성 -> 이곳에 위에서 만든 애니메이션을 적용
const AnimatedDiv = styled.div`
  display: inline-block;
  animation: ${changeRainbow} 2s infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`

const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

	background-color: ${props => props.theme.background};
  color: ${props => props.theme.color};
  border: 2px solid ${props => props.theme.border};
  &:hover{
  	background-color: ${props => props.theme.hoverBackground};
  	color: ${props => props.theme.hoverColor};
  }
`;

//default로 값을 설정
ThemeButton.defaultProps = {
  theme: {
	  background: "white",
		border: "black",
		color: "black",
    hoverBackground: "black",
    hoverColor: "white"
  }
}

// theme에서 사용할 값을 설정
const defaultTheme = {
    background: "black",
    border: "black",
    color: "white",
    hoverBackground: "white",
    hoverColor: "black"
};

// 함수(추가기능)을 통해 테마값 다르게 전달하기
const redTheme = {
    background: "red",
    border: "red",
    color: "white",
    hoverBackground: "green",
    hoverColor: "white"
}

const StyledComponentFollow = (props) => {
  const { name } = props

  const [ theme, setTheme ] = useState(defaultTheme)

  return (
    <div>
      <NewButton>새로운버튼: {name}</NewButton>
      <PrevButton />
      <UpdatedButton> 업데이트된 버튼(hover) </UpdatedButton>
      <br/>
      <UpdatedButton as={'a'} href='#'> 링크로 바꾼 버튼스타일 </UpdatedButton>
      <br/>
      <Button> 보통 출력 </Button>
	    <Button as={ReversedButton}> 거꾸로 출력 </Button>
      <br/>
      <AttrsButton> attrs의 버튼 </AttrsButton>
	    <AttrsButton size={'100px'} opacity={0.5}> attrs의 버튼 </AttrsButton>
      <br/>
      <AnimatedDiv> 막 돌아가는 디브 </AnimatedDiv>
      <br/>
      <button onClick={() => setTheme(redTheme)}>red ver</button>
      <button onClick={() => setTheme(defaultTheme)}>reset</button>
      <ThemeButton>일반버튼</ThemeButton>
      <ThemeProvider theme={theme}>
        <ThemeButton>테마 버튼</ThemeButton>
      </ThemeProvider>
    </div>
  );
};

export default StyledComponentFollow;
