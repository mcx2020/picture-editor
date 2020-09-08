import React from 'react';
import styled from "styled-components"
import {CanvasBox} from "./components/CanvasBox"
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
    canvas.show{
      margin-left:50px;
      border:1px solid black;
      box-shadow: 0 0 5px rgba(0,0,0,0.4);
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
    this.state = {
      canvasSizeShow:{
        canvasSize:{width:'xxx',height:'yyy'},
        picture1:{positionX:'xxx',positionY:'yyy',width:'xxx',height:'yyy'},
        picture2:{positionX:'xxx',positionY:'yyy',width:'xxx',height:'yyy'},
        picture3:{positionX:'xxx',positionY:'yyy',width:'xxx',height:'yyy'},
        picture4:{positionX:'xxx',positionY:'yyy',width:'xxx',height:'yyy'},
      }
    }

    this.canvasParameter = {
      canvasSize:{
        width:400,
        height:400
      },
      box1:{
        top:10,
        left:10,
        width:180,
        height:180
      },
      box2: {
        top: 10,
        left: 210,
        width: 180,
        height: 180
      },
      box3: {
        top: 210,
        left: 10,
        width: 180,
        height: 180
      },
      box4:{
        top:210,
        left:210,
        width:180,
        height:180
      }
    }
  }

  getImgSrcAndTransform = (srcList)=>{
    return new Promise((resolve)=>{
      resolve(srcList)
    }).then(this.convertImgElement)
      .then(this.canvasDrawImg)
  }

  convertImgElement = (srcList)=>{
    let imgObject = {}
    for(let i in srcList){
      if(srcList.hasOwnProperty(i)){
        let img = new Image()
        img.src = srcList[i]
        imgObject[i] = img
      }
    }
    console.log(imgObject)
    return imgObject
  }

  canvasDrawImg = (imgObject)=>{
    for(let i in imgObject){
      if(imgObject.hasOwnProperty(i)){
        let box = 'box' + /\d/.exec(i)
        console.log(box)
        console.log(this.canvasParameter[box].width)
        console.log(this.canvasParameter[box].height)
        let [dx,dy,dw,dh] = [this.canvasParameter[box].left,
          this.canvasParameter[box].top,
          this.canvasParameter[box].width,
          this.canvasParameter[box].height,
        ]
        let [sx,sy,sw,sh] = this.calculateImgSize(this.canvasParameter[box].width,this.canvasParameter[box].height,imgObject[i].width,imgObject[i].height)

        let ctx = this.canvas.current.getContext('2d')
        ctx.drawImage(imgObject[i],sx,sy,sw,sh,dx,dy,dw,dh)
      }
    }
  }

  calculateImgSize = (boxWidth,boxHeight,imgWidth,imgHeight)=>{
    let sx,sy
    let boxRatio = boxWidth/boxHeight
    let imgRatio = imgWidth/imgHeight
    if(imgRatio > boxRatio){

      sx = (imgWidth - imgHeight*boxRatio)/2
      sy = 0
      imgWidth = imgHeight*boxRatio
    }else{
      sx = 0
      sy =  (imgHeight-imgWidth/boxRatio)/2
      imgHeight = imgWidth/boxRatio
    }
    return [sx,sy,imgWidth,imgHeight]
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
            <CanvasBox parameter={this.canvasParameter} getImgScr={this.getImgSrcAndTransform}/>
            <canvas className='show' ref={this.canvas}>当前浏览器不支持 Canvas，推荐使用 Chrome 浏览器</canvas>
          </main>
        </div>
      </Wrapper>
    )
  }
}

export default App;
