const initValue = [
  {
    id: 1,
    name: '吃饭',
    isDone: false
  },
  {
    id: 2,
    name: '睡觉',
    isDone: true
  },
  {
    id: 3,
    name: '打豆豆',
    isDone: false
  }
]
export default function todos (state = initValue, action: any) {
  return state
}
