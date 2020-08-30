import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  img{
    width:200px;
  }
`

class TopBar extends React.Component{
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.myImg = React.createRef();
  }
  uploadImg(){
    let file = this.myRef.current.files[0]
    let reader = new FileReader()
    reader.addEventListener('load',()=>{
      this.myImg.current.src = reader.result
    },false)
    if(file){
      reader.readAsDataURL(file)
    }
  }
  render(){
    return (
      <Wrapper>
        <input type="file" ref={this.myRef} onChange={this.uploadImg.bind(this)}/>
        <img ref={this.myImg} src="" alt=""/>
      </Wrapper>

    )
  }

}

export {TopBar}