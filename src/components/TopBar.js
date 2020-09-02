import React from 'react'
import styled from "styled-components"

const Wrapper = styled.div`
  height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  button{
    margin:.8em;
    padding:.3em;
    outline:none;
    cursor: pointer;
    border:none;
    background: #EEE;
    width:100px;
  }
  button:hover{
    opacity: 0.9;
  }
`

function TopBar(){
  return (
    <Wrapper>
      <button>好看的按钮</button>
      <button>好看的按钮</button>
    </Wrapper>
  )
}

export {TopBar}