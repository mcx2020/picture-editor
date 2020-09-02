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
`

class Canvas extends React.Component{
  constructor(props) {
    super(props);
    this.img1 = React.createRef()
    this.img2 = React.createRef()
    this.img3 = React.createRef()
    this.img4 = React.createRef()
    this.xxx = React.createRef()
  }
  handleDrop(imgID,event){
    this[imgID].current.src = `${event.dataTransfer.getData("text/plain")}`;
    setTimeout(()=>{
      console.log(this.img1.current.width)
      console.log(this.img1.current.height)
    },1000)
    console.log(this.img1.current)
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
        <img ref={this.xxx} src="" alt=""/>
      </Wrapper>
    )
  }

}

export {Canvas}