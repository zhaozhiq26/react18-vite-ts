import img from '@/assets/avatar.jpg'
import { useRef, useState, useEffect } from 'react'
import './index.less'
import Clild from './child' 
interface IPopup {
  doSomething(): void;
}
const Abort = () => {
  const [sta, steSta] = useState({ name: '志强', age: '男' })
  // const data = { name: '志强', age: '男' }
  const [num, setNum] = useState<number>(0)
  const childRef = useRef<IPopup>(null)
  const callChildRef = () => {
    console.log(sta)
    steSta({...sta, name: '万杰'})
    // childRef.current?.doSomething();
  }
  const changeNum = (number:any) => {
    setNum(number)
    console.log(num)
  }
  useEffect(() => {
  }, [])
  return (
    <>
      <h1 onClick={callChildRef}>这是Abort页面</h1>
      <img src={img} alt="" />
      <span>{ sta.age }</span>
      <span onClick={ () =>changeNum(1)}>{ num}</span>
      <Clild ref={childRef} data={sta}></Clild>
      <div className='box'>
 
      </div>
    </>
  )
}
export default Abort