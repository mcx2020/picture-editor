import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 400px;
  height:400px;
  border:1px solid black;
  box-shadow: 0 0 5px rgba(0,0,0,0.4);
  display:flex;
  flex-flow:row wrap;
  justify-content:center;
  align-content: center;
  .picture-area{
    width:180px;
    height:180px;
    margin:10px;
    background: tan;
  }
`

class Canvas extends React.Component{
  constructor(props) {
    super(props);
    this.myBox1 = React.createRef()
    this.myBox2 = React.createRef()
    this.myBox3 = React.createRef()
    this.myBox4 = React.createRef()
  }
  handleDrop(boxID,event){
    console.log(boxID)
    console.log(this[boxID])
    this[boxID].current.style.background = `url(${event.dataTransfer.getData("text/plain")})`;
  }
  render(){
    return (
      <Wrapper>
        <div className="picture-area box1" ref={this.myBox1} onDragOver={(event)=>{event.preventDefault()}} onDrop={this.handleDrop.bind(this,"myBox1")}>图片区域</div>
        <div className="picture-area box2" ref={this.myBox2} onDragOver={(event)=>{event.preventDefault()}} onDrop={this.handleDrop.bind(this,"myBox2")}>图片区域</div>
        <div className="picture-area box3" ref={this.myBox3} onDragOver={(event)=>{event.preventDefault()}} onDrop={this.handleDrop.bind(this,"myBox3")}>图片区域</div>
        <div className="picture-area box4" ref={this.myBox4} onDragOver={(event)=>{event.preventDefault()}} onDrop={this.handleDrop.bind(this,"myBox4")}>图片区域</div>
      </Wrapper>
    )
  }

}

export {Canvas}