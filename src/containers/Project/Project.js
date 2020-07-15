import React, { useState } from 'react';
import {
  Row, Col, Card, List,
  Menu, Select, Dropdown,
  Avatar, Statistic, Button,
  Progress,
} from 'antd';
import {
  UserOutlined,
  LogoutOutlined,
  PlayCircleTwoTone,
  CalendarOutlined,
} from '@ant-design/icons';
import moment from 'moment';
import { BaseLayout } from '../../views';
import { Chart } from 'react-google-charts';
import User from '../User';
import routes from '../../routes';

const { Option } = Select;

const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

const dateFormat = 'LL';

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i}>{`Project ${i}`}</Option>);
}

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
];

const Project = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onClick = ({ key }) => {
    console.log('key', key)
    if (key === routes.USER) {
      showDrawer();
    }
  };

  return (
    <BaseLayout>
      <Row className="header">
        <Col span={16}>
          <Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="Select project"
          >
            {children}
          </Select>
        </Col>
        <Col className="header-item header-right range-picker">
          <span><CalendarOutlined /> {moment(new Date()).format(dateFormat)}</span>
          <Dropdown
            overlay={
              <Menu onClick={onClick}>
                <Menu.Item key={routes.USER} icon={<UserOutlined />}>
                  User info
              </Menu.Item>
                <Menu.Item key={routes.LOGOUT} icon={<LogoutOutlined />}>
                  Logout
              </Menu.Item>
              </Menu>
            }
          >
            <span onClick={e => e.preventDefault()}>
              <Avatar className="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <span>John Ably</span>
            </span>
          </Dropdown>
        </Col>
      </Row>
      <Row className="row-timesheet">
        <Col span={16}>
          <Card title="Timesheet" className="timesheet mr-0" bordered={false}>
            <List
              size="large"
              className="timesheet-item"
              dataSource={data}
              renderItem={item => (
                <List.Item
                  actions={[
                    <div className="timesheet-progress">
                      <Progress percent={30} size="small" showInfo={false} />
                    </div>,
                    <span className="time-item">00:30:00</span>,
                    <PlayCircleTwoTone />
                  ]}
                >
                  {item}
                </List.Item>
              )}
            />
            <div className="btn-submit">
              <Button type="primary">Submit</Button>
            </div>
          </Card>
          <Card title="Last Actions (3)" className="timesheet last-actions mr-0" bordered={false}>
            <Chart
              width={'100%'}
              chartType="Timeline"
              loader={<div className="loading-chart">Loading Chart</div>}
              data={[
                [
                  { type: 'string', id: 'Term' },
                  { type: 'string', id: 'Name' },
                  { type: 'date', id: 'Start' },
                  { type: 'date', id: 'End' },
                ],
                ['1', 'George Washington', new Date(1789, 3, 30), new Date(1797, 2, 4)],
                ['2', 'John Adams', new Date(1797, 2, 4), new Date(1801, 2, 4)],
                ['3', 'Thomas Jefferson', new Date(1801, 2, 4), new Date(1809, 2, 4)],
              ]}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Time Tracking" className="timesheet" bordered={false}>
            <Row gutter={16}>
              <Col span={12}>
                <Countdown title="Countdown" value={deadline} />
              </Col>
              <Col span={12}>
                <Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
              </Col>
              <Col span={24}>
                <Card title="Pie Chart" className="pie-chart" bordered={false}>
                  <Chart
                    width={'100%'}
                    height={'200px'}
                    chartType="PieChart"
                    loader={<div className="loading-chart">Loading Chart</div>}
                    data={[
                      ['Task', 'Hours per Day'],
                      ['Work', 11],
                      ['Eat', 2],
                      ['Commute', 2],
                      ['Watch TV', 2],
                      ['Sleep', 7],
                    ]}
                    options={{ is3D: true }}
                  />
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <User
        {...{ visible, onClose }}
      />
    </BaseLayout>
  );
}

export default Project;