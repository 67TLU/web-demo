import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Config from './config/config'
import Header from './components/layout/Header/Header.jsx'
import SideBar from './components/layout/SideBar/SideBar'
import Loading from './components/common/Loading/Loading'
import Button from './components/common/Button/Button'
import Search from './components/common/Search/Search'
import Infor from './components/common/Infor/Infor'
import Tree from './components/common/Tree/Tree'
import ContractLinks from './components/common/ContractLinks/ContractLinks'
function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    document.title=Config.TITLE;
  },[]);
  return (
    <>
    <Header></Header>
    <SideBar></SideBar>
    <Button className='button'>aksjdhiaóduiády</Button>
    <Loading></Loading>
    <Search placeholder="Search..." name='user' type='text'></Search>
    <Infor>Infor</Infor>
    <Tree></Tree>
    <ContractLinks></ContractLinks>
        <Button className='button'>aksjdhiaóduiády</Button>
    <Loading></Loading>
    <Search placeholder="Search..." name='user' type='text'></Search>
    <Infor>Infor</Infor>
    <Tree></Tree>
    <ContractLinks></ContractLinks>
        <Button className='button'>aksjdhiaóduiády</Button>
    <Loading></Loading>
    <Search placeholder="Search..." name='user' type='text'></Search>
    <Infor>Infor</Infor>
    <Tree></Tree>
    <ContractLinks></ContractLinks>
    </>
  )
}

export default App
