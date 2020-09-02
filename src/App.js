import React from 'react';
import styled from "styled-components"
import {Canvas} from "./components/Canvas"
import {Tool} from "./components/Tool"
import {TopBar} from "./components/TopBar"

const Wrapper = styled.div`
  .header {
    background: tan;
    height:70px;
  }
  .content{
    display: flex;
    .aside{
      display: block;
      overflow: auto;
      min-width:200px;
      max-width:200px;
      height:calc(100vh - 70px);
      background: #EEE;
    }
    .main{
      background: #FFF;
      width:100%;
      display:flex;
      justify-content: center;
      align-items: center;
    }
    button{
      margin:0 60px;
    }
    canvas{
      border:1px solid green;
    }
    .img{
      width:300px;
    }
  }
`

class App extends React.Component{
  constructor(props) {
    super(props)
    this.canvas = React.createRef()
    this.canvasParameter = {
      canvasSize:{
        width:400+"px",
        height:400+"px"
      },
      box1:{
        top:10+"px",
        left:10+"px",
        width:180+"px",
        height:180+"px"
      },
      box2: {
        top: 10+"px",
        left: 210+"px",
        width: 180+"px",
        height: 180+"px"
      },
      box3: {
        top: 210+"px",
        left: 10+"px",
        width: 180+"px",
        height: 180+"px"
      },
      box4:{
        top:210+"px",
        left:210+"px",
        width:180+"px",
        height:180+"px"
      }
    }
  }
  previewPicture=()=>{
    console.log('开始预览图片啦')
    console.log(this.canvas.current)
  }

  componentDidMount() {
    const canvas = this.canvas.current
    const setCanvas = ()=>{
      canvas.width = "400"
      canvas.height = "400"
    }
    const drawShape = ()=>{
      let c = canvas.getContext('2d')
      c.fillStyle = 'rgba(255,0,0,0.5)'
      c.fillRect(50,50,50,50)
      c.fillStyle = 'rgba(0,0,255,0.5)'
      c.fillRect(100,80,50,50)
    }
    const canvasToImg = (canvas,imgName)=>{
      let a = document.createElement("a");
      a.href = canvas.toDataURL();
      a.download = imgName;
      // a.click()
    }

    setCanvas()
    drawShape()
    canvasToImg(canvas,'矩形')

  }

  render(){
    return (
      <Wrapper>
        <header className="header">
          <TopBar/>
        </header>
        <div className="content">
          <aside className="aside">
            <Tool/>
          </aside>
          <main className="main">
            <Canvas parameter={this.canvasParameter}/>
            <button onClick={this.previewPicture}>点击我预览图片</button>
            <canvas ref={this.canvas}>当前浏览器不支持 canvas</canvas>
          </main>

        </div>
      </Wrapper>
    )
  }
}

export default App;
