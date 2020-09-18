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
  .line-row1{
    position:absolute;
    background:blue;
    cursor: ns-resize;
  }
  .line-column1{
    position:absolute;
    background:red;
    cursor:ew-resize;
  }  
 
`

class Canvas extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      draggable:false,
      lineDirection:null,
      position: null,
      rowLine:{
        width: '100%',
        height:'10px',
        top:195,
        left:0,
        zIndex:'5'
      },
      columnLine:{
        width: '10px',
        height:'100%',
        top:0,
        left:195,
        zIndex:'5'
      }
    }
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
// 按下调节线
  lineDown = (lineDirection,e)=>{
    this.setState({draggable:true})
    this.setState({position:[e.clientX,e.clientY]})
    this.setState({lineDirection})
  }

  componentDidMount() {
    // 监听鼠标的位置移动
    document.addEventListener('mousemove',(e)=>{
      if(this.state.draggable === false)return;
      let deltaX = e.clientX - this.state.position[0]
      let deltaY = e.clientY - this.state.position[1]
      if(this.state.lineDirection === 'row'){
        let top = parseInt(this.state.rowLine.top) + deltaY
        this.setState({rowLine:{
            ...this.state.rowLine,
            width: 400,
            height:10,
            top,
            zIndex:'5'
          }})
      }else{
        let left = parseInt(this.state.columnLine.left) + deltaX
        this.setState({columnLine:{
            ...this.state.columnLine,
            width: 10,
            height:400,
            left,
            zIndex:'5'
          }})
      }
      this.setState({
        position:[e.clientX,e.clientY]
      })

      if(this.state.lineDirection === 'row'){
        this.props.justifyBox('box1',0,deltaY)
        this.props.justifyBox('box2',0,deltaY)
        this.props.justifyBox('box3',0,deltaY)
        this.props.justifyBox('box4',0,deltaY)
      }else{
        this.props.justifyBox('box1',deltaX,0)
        this.props.justifyBox('box2',deltaX,0)
        this.props.justifyBox('box3',deltaX,0)
        this.props.justifyBox('box4',deltaX,0)
      }


    })

    // 监听鼠标的抬起
    document.addEventListener('mouseup',()=>{
      this.setState({draggable:false})
    })
  }

  render(){
    return (
      <Wrapper style={this.props.parameter.canvasSize}>
        <div className="line-row1"
             style={this.state.rowLine}
             onMouseDown={this.lineDown.bind(null,'row')} />
        <div className="line-column1"
             style={this.state.columnLine}
             onMouseDown={this.lineDown.bind(null,'column')} />
        <div className="picture-area"
             style={this.props.parameter.box1}
             onDragOver={(event)=>{event.preventDefault()}}
             onDrop={this.handleDrop.bind(this,"img1")}
             >
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
        <button className='transform-data' onClick={this.uploadImg}>预览图片</button>
      </Wrapper>
    )
  }
}

export {Canvas}