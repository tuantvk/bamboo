import React from 'react';
import {
  Row, Col, Card,
  Select, DatePicker,
} from 'antd';
import { BaseLayout } from '../../views';
import { Chart } from 'react-google-charts';

const { Option } = Select;
const { RangePicker } = DatePicker;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i}>{`Project ${i}`}</Option>);
}

const Report = () => {
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
        <Col span={7} className="header-item range-picker">
          <RangePicker />
        </Col>
      </Row>
      <Row className="row-timesheet">
        <Col span={24}>
          <Card title="My Report" className="timesheet" bordered={false}>
            <Chart
              width={'100%'}
              chartType="Timeline"
              loader={<div>Loading Chart</div>}
              data={[
                [
                  { type: 'string', id: 'Position' },
                  { type: 'string', id: 'Name' },
                  { type: 'date', id: 'Start' },
                  { type: 'date', id: 'End' },
                ],
                [
                  'President',
                  'George Washington',
                  new Date(1789, 3, 30),
                  new Date(1797, 2, 4),
                ],
                ['President', 'John Adams', new Date(1797, 2, 4), new Date(1801, 2, 4)],
                [
                  'President',
                  'Thomas Jefferson',
                  new Date(1801, 2, 4),
                  new Date(1809, 2, 4),
                ],
                [
                  'Vice President',
                  'John Adams',
                  new Date(1789, 3, 21),
                  new Date(1797, 2, 4),
                ],
                [
                  'Vice President',
                  'Thomas Jefferson',
                  new Date(1797, 2, 4),
                  new Date(1801, 2, 4),
                ],
                [
                  'Vice President',
                  'Aaron Burr',
                  new Date(1801, 2, 4),
                  new Date(1805, 2, 4),
                ],
                [
                  'Vice President',
                  'George Clinton',
                  new Date(1805, 2, 4),
                  new Date(1812, 3, 20),
                ],
                [
                  'Secretary of State',
                  'John Jay',
                  new Date(1789, 8, 25),
                  new Date(1790, 2, 22),
                ],
                [
                  'Secretary of State',
                  'Thomas Jefferson',
                  new Date(1790, 2, 22),
                  new Date(1793, 11, 31),
                ],
                [
                  'Secretary of State',
                  'Edmund Randolph',
                  new Date(1794, 0, 2),
                  new Date(1795, 7, 20),
                ],
                [
                  'Secretary of State',
                  'Timothy Pickering',
                  new Date(1795, 7, 20),
                  new Date(1800, 4, 12),
                ],
                [
                  'Secretary of State',
                  'Charles Lee',
                  new Date(1800, 4, 13),
                  new Date(1800, 5, 5),
                ],
                [
                  'Secretary of State',
                  'John Marshall',
                  new Date(1800, 5, 13),
                  new Date(1801, 2, 4),
                ],
                [
                  'Secretary of State',
                  'Levi Lincoln',
                  new Date(1801, 2, 5),
                  new Date(1801, 4, 1),
                ],
                [
                  'Secretary of State',
                  'James Madison',
                  new Date(1801, 4, 2),
                  new Date(1809, 2, 3),
                ],
              ]}
            />
          </Card>
        </Col>
      </Row>
    </BaseLayout>
  );
}

export default Report;