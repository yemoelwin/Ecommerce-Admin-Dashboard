import React, { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];

const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    // const {
    //     token: { colorBgContainer },
    // } = theme.useToken();
    return (
        <>
            <Layout
                style={{
                    minHeight: '100vh',
                }}
                >
                <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <div className="demo-logo-vertical" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
                </Sider>
                <Layout>
                    <Header
                    style={{
                            padding: 0,
                            background: "white",
                        // background: colorBgContainer,
                    }}
                    />
                    <Content
                    style={{
                        margin: '0 16px',
                    }}
                    >
                <Breadcrumb style={{ margin: '16px 0', background: "white", height: "60px", padding: "18px" }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                        background: "white",
                        padding: 24,
                        minHeight: "100vh",
                        //   background: colorBgContainer,
                    }}
                >
                    Bill is a cat.
                </div>
                </Content>
                <Footer
                style={{
                    textAlign: 'center',
                }}
                >
                Admin ©2023 Created by YML
                </Footer>
            </Layout>
    </Layout>
        </>
    )
}


export default MainLayout