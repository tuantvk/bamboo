import React from 'react';
import { Drawer, Col, Row } from 'antd';

const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

const User = ({ visible, onClose }) => {

  return (
    <Drawer
      width={640}
      placement="right"
      closable={false}
      onClose={onClose}
      visible={visible}
    >
      <p className="site-description-item-profile-p" style={{ marginBottom: 24 }}>
        User Profile
          </p>
      <p className="site-description-item-profile-p">Personal</p>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Full Name" content="Lily" />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Account" content="AntDesign@example.com" />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <DescriptionItem title="City" content="HangZhou" />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Country" content="China" />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <DescriptionItem title="Birthday" content="February 2,1900" />
        </Col>
        <Col span={12}>
          <DescriptionItem title="Website" content="-" />
        </Col>
      </Row>
    </Drawer>
  );
};

export default User;