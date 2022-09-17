import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
  import { Layout, Menu } from 'antd';
  import React, { useState } from 'react';
  import './DefaultLayout.css'
  import { Link } from 'react-router-dom';

  const { Header, Sider, Content } = Layout;
 


  
  const DefaultLayout = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">{  !collapsed ? <h1 style={{color:'white'}}>Jobs </h1> : "" }</div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[window.location.pathname]}
            items={[
              {
                key: '/profile',
                icon: <UserOutlined />,
                label: <Link to="/profile">Profile</Link>
              },
              {
                key: '/',
                icon: <VideoCameraOutlined />,
                label: <Link to="/">Home</Link>,
              },
              {
                key: '/appliedJobs',
                icon: <UploadOutlined />,
                label: <Link to="/appliedJobs">Applied Jobs</Link>,
              },
              {
                key: '/postjobs',
                icon: <VideoCameraOutlined />,
                label: <Link to="/postjobs">Post Jobs</Link>,
              },
              {
                key: '/jobinfo',
                icon: <UploadOutlined />,
                label: <Link to="/jobinfo"> Job Info</Link>,
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    );
  };
  
  export default DefaultLayout;
  
  