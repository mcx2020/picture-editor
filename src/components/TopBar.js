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
      <button onClick={()=>{console.log("Hello")}}>预览图片</button>
      <button>下载图片</button>
    </Wrapper>
  )
}

export {TopBar}