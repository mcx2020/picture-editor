import React from 'react';
import styled from "styled-components"
import {Canvas} from "./components/Canvas"
import {Tool} from "./components/Tool"

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
      display:flex;
      justify-content: center;
      align-items: center;
    }
  }
`

function App() {
  return (
    <Wrapper>
      <header>导航栏</header>
      <div className="content">
        <aside>
          <Tool/>
        </aside>
        <main>
          <Canvas/>
        </main>
      </div>
    </Wrapper>
  )
}

export default App;
