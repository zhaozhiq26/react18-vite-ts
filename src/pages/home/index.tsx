import { useNavigate } from 'react-router-dom';
export default function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/about');
  }
  return (
    <>
      <h1>你好啊!</h1>
      <h2 onClick={handleClick}>11111111</h2>
    </>
  )
}