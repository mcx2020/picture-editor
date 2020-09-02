import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  input[type="file"]{
    width:200px;
  }
  img{
    width:200px;
  }
`

class Tool extends React.Component{
  constructor(props) {
    super(props);
    this.inputImg = React.createRef();
    this.myImg = React.createRef();
    this.state = {
      imgList:{}
    }
  }

  uploadImg(){
    for(let i=0;i<this.inputImg.current.files.length;i++){
      let file = this.inputImg.current.files[i]
      let reader = new FileReader()
      if(file){
        reader.readAsDataURL(file)
      }
      reader.addEventListener('load',()=>{
        this.setState({imgList:{...this.state.imgList,[`img${i}`]:reader.result}})
      },false)
    }
  }

  render(){
    console.log('渲染了1次')
    let imgList = []
    for (let i in this.state.imgList){
      imgList.push(<img key={i.toString()} src={this.state.imgList[i]} alt=""/>)
    }
    return (
      <Wrapper>
        <input type="file" multiple ref={this.inputImg} onChange={this.uploadImg.bind(this)}/>
        {imgList}
      </Wrapper>
    )
  }

}

export {Tool}