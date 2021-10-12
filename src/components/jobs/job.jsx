import React from "react";
import "./jobs.scss";
import dayjs from "dayjs";

const Job = ({ job }) => {
  return (
    <div className="job_card">
      <img src={job.company.logoUrl} alt="" />
      <h1>{job.title}</h1>
      <div className="aboutCompany">
        <p>{job.company.name}</p>
        <p>{job.locationNames}</p>
      </div>
      <div>
        <p className="commitment full-time">{job.commitment.slug}</p>
        <p className="date">{dayjs(job.postedAt).format("DD/MM/YYYY")}</p>
      </div>
    </div>
  );
};

export default Job;
