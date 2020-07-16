import React from 'react';
import {
  Row, Col, Card, Tag,
  Select, DatePicker, Timeline,
} from 'antd';
import { BaseLayout } from '../../views';
import { Chart } from 'react-google-charts';
import dataProjects from '../../data/projects';
import dataReport from '../../data/report';

const { Option } = Select;
const { RangePicker } = DatePicker;

const projects = [];
for (let i = 0; i < dataProjects.length; i++) {
  projects.push(<Option key={dataProjects[i].id}>{dataProjects[i].name}</Option>);
}

const Report = () => {

  const handleChange = (value, options) => {
    console.log('value, options', value, options);
  }

  const handlePicker = (date, dateString) => {
    console.log('date, dateString', date, dateString);
  }

  return (
    <BaseLayout>
      <Row className="header">
        <Col span={16}>
          <Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="Select project"
            onChange={handleChange}
          >
            {projects}
          </Select>
        </Col>
        <Col span={7} className="header-item range-picker">
          <RangePicker
            onChange={handlePicker}
          />
        </Col>
      </Row>
      <Row className="row-timesheet">
        <Col span={24}>
          <Card title="My Report" className="timesheet" bordered={false}>
            <Chart
              width={'100%'}
              chartType="Calendar"
              loader={<div>Loading Chart</div>}
              data={[
                [{ type: 'date', id: 'Date' }, { type: 'number', id: 'Won/Loss' }],
                [new Date(2020, 3, 13), 0],
                [new Date(2020, 3, 14), 4],
                [new Date(2020, 3, 15), 4],
                [new Date(2020, 3, 16), 0],
                [new Date(2020, 3, 17), 4],
              ]}
            />
            <Timeline className="timeline">
              {dataReport.map(report => (
                <Timeline.Item key={report.id}>
                  <span className="timeline-date">{report.date}</span>
                  {report.projects.map(proj => (
                    <Tag key={proj.id} color={proj.color}>{proj.name}</Tag>
                  ))}
                </Timeline.Item>
              ))}
            </Timeline>
          </Card>
        </Col>
      </Row>
    </BaseLayout>
  );
}

export default Report;