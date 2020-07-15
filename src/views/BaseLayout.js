import React from 'react';
import {
  Layout,
  Menu,
} from 'antd';
import {
  ProjectOutlined,
  ScheduleOutlined,
} from '@ant-design/icons';
import bamboo from '../bamboo.png';
import routes from '../routes';
import { Link, useRouteMatch } from "react-router-dom";
import pjson from '../../package.json';

const { Sider, Content } = Layout;

export default ({ children }) => {
  const match = useRouteMatch();

  return (
    <Layout className="app-layout">
      <Sider theme="light">
        <div className="logo">
          <img src={bamboo} alt="bamboo logo" />
        </div>
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[match.path || routes.PROJECT]}
        >
          <Menu.Item key={routes.PROJECT} icon={<ProjectOutlined />}>
            <Link to={routes.PROJECT}>Project</Link>
          </Menu.Item>
          <Menu.Item key={routes.REPORT} icon={<ScheduleOutlined />}>
            <Link to={routes.REPORT}>Report</Link>
          </Menu.Item>
        </Menu>
        <div className="app-version">
          <p>{`v${pjson.version} by tuantvk`}</p>
        </div>
      </Sider>
      <Layout>
        <Content>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}