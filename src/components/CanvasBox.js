import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  border:1px solid black;
  box-shadow: 0 0 5px rgba(0,0,0,0.4);
  position: relative;
  .picture-area{
    position: absolute;
    width:180px;
    height:180px;
    background: tan;
  }
  .picture-area img{
    width:100%;
    height:100%;
    object-fit: cover;
  }
  button.transform-data{
    position:absolute;
    right:100%;
    top:50%;
    transform:translate(-50%,-50%);
  }
`

class CanvasBox extends React.Component{
  constructor(props) {
    super(props);
    this.img1 = React.createRef()
    this.img2 = React.createRef()
    this.img3 = React.createRef()
    this.img4 = React.createRef()
  }
  handleDrop(imgID,event){
    this[imgID].current.src = `${event.dataTransfer.getData("text/plain")}`;
  }

  uploadImg = ()=>{
    let imgSrcList = {
      img1:this.img1.current.src,
      img2:this.img2.current.src,
      img3:this.img3.current.src,
      img4:this.img4.current.src
    }
    this.props.getImgScr(imgSrcList)
  }

  render(){
    return (
      <Wrapper style={this.props.parameter.canvasSize}>
        <div className="picture-area"
             style={this.props.parameter.box1}
             onDragOver={(event)=>{event.preventDefault()}}
             onDrop={this.handleDrop.bind(this,"img1")}>
          <img ref={this.img1} src="" alt=""/>
        </div>
        <div className="picture-area"
             style={this.props.parameter.box2}
             onDragOver={(event)=>{event.preventDefault()}}
             onDrop={this.handleDrop.bind(this,"img2")}>
          <img ref={this.img2} src="" alt=""/>
        </div>
        <div className="picture-area"
             style={this.props.parameter.box3}
             onDragOver={(event)=>{event.preventDefault()}}
             onDrop={this.handleDrop.bind(this,"img3")}>
          <img ref={this.img3} src="" alt=""/>
        </div>
        <div className="picture-area"
             style={this.props.parameter.box4}
             onDragOver={(event)=>{event.preventDefault()}}
             onDrop={this.handleDrop.bind(this,"img4")}>
          <img ref={this.img4} src="" alt=""/>
        </div>
        <button className='transform-data' onClick={this.uploadImg}>把 img 信息传递</button>
      </Wrapper>
    )
  }
}

export {CanvasBox}