import React from 'react';
import './assets/scss/styles.scss'
import logo from './assets/images/logo.png'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import { Breadcrumb, Layout, Menu } from 'antd';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Checkout from './components/CheckOut/Checkout';
import News from './components/News/News';
import Shop from './components/Shop/Shop';
import MyAccount from './components/MyAccount/MyAccount';
import {productContext, ProductProvider} from './components/providers/ProductProvider';
import ModalProductDetail from './components/Modal/ModalProductDetail';
import Login from './components/Author/Login';
const { Header, Content, Footer } = Layout;


function App() {
  // const {author}=useContext(productContext)
  return (
    <BrowserRouter>
      <ProductProvider>
        <div className="App">
          <Layout>
            <Header
              style={{
                position: 'fixed',
                zIndex: 1,
                width: '100%',
              }}
            >
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
              >
                <Menu.Item style={{ padding: 0 }}>
                  <img src={logo} alt='logo' width='64px'></img>
                </Menu.Item>
                <Menu.Item>
                  <Link to=''>Home</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to='/cart'>Cart</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to='/checkout'>CheckOut</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to='/news'>News</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to='/shop'>Shop</Link>
                </Menu.Item>
                <Menu.Item>
            
                  <Link to='/login'>Login</Link>
                </Menu.Item>
              </Menu>
            </Header>
            <Content
              className="site-layout"
              style={{
                marginTop: 64,
              }}
            >

              <div
                className="site-layout-background"
                style={{
                  padding: 24,
                  minHeight: 380,
                }}
              >
                <Routes>
                  <Route path='/' element={<Home />}></Route>
                  <Route path='/cart' element={<Cart />}></Route>
                  <Route path='/checkout' element={<Checkout />}></Route>
                  <Route path='/news' element={<News />}></Route>
                  <Route path='/shop' element={<Shop />}></Route>
                  <Route path='/login' element={<Login/>}></Route>
                </Routes>
              </div>
            </Content>
            <Footer
              style={{
                textAlign: 'center',
              }}
            >
              hoctv ©2022
            </Footer>
          </Layout>
        </div>
        <ModalProductDetail></ModalProductDetail>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
