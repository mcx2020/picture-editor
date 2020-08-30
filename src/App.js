import React from 'react';
import styled from "styled-components"
import {TopBar} from "./components/TopBar"

const Wrapper = styled.div`
  header {
    background: tan;
    height:70px;
  }
  .content{
    display: flex;
    aside{
      width:200px;
      height:calc(100vh - 70px);
      background: #EEE;
    }
    main{
      background: #FFF;
      width:100%;
    }
  }
`

function App() {
  return (
    <Wrapper>
      <header>导航栏</header>
      <div className="content">
        <aside>
          <TopBar/>
        </aside>
        <main>内容栏</main>
      </div>
    </Wrapper>
  )
}

export default App;
