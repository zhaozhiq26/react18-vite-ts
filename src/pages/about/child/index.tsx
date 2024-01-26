import { forwardRef, useImperativeHandle } from 'react'
interface Props {
  data: object; 
}
const clild = forwardRef((props: Props, ref) => {
  const { data } = props
  const doSomething = () => { 
    console.log('113232131231')
    console.log(data)
  }
  useImperativeHandle(ref, () => ({
    doSomething
  }));
  return (
    <>
      <h1 onClick={doSomething}>这是种子页面</h1>
      <span>{ data.name }</span>
      <span>{ data.age }</span>
    </>
  )
})
export default clild