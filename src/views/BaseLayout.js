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
  const { path } = useRouteMatch();
  const selectedKeys = path && path !== '/' ? path : routes.PROJECT;

  return (
    <Layout className="app-layout">
      <Sider theme="light">
        <div className="logo">
          <img src={bamboo} alt="bamboo logo" />
        </div>
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={selectedKeys}
        >
          <Menu.Item key={routes.PROJECT} icon={<ProjectOutlined />}>
            <Link to={routes.PROJECT}>Project</Link>
          </Menu.Item>
          <Menu.Item key={routes.REPORT} icon={<ScheduleOutlined />}>
            <Link to={routes.REPORT}>Report</Link>
          </Menu.Item>
        </Menu>
        <div className="app-version">
          <span>{`v${pjson.version} by`}&nbsp;</span>
          <span>
            <a href={pjson.author.url} target="_blank">{`${pjson.author.name}`}</a>
          </span>
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