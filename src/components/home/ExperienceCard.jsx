import React from 'react';

import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="12">
      <div className="pb-5 text-center">
        <img className="mb-3" src={data.companylogo} alt="" />
        <p className="lead">
          {data.role}
          <br />
          {data.date}
        </p>

      </div>
    </Col>
  );
}

export default ExperienceCard;