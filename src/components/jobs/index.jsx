import React, { useEffect, useState } from "react";
import Job from "./job";
import "./jobs.scss";
import { GET_JOB_INFORMATION } from "GraphQL/Queries";
import { useQuery } from "@apollo/client";
import Loader from "components/loader";

const Jobs = () => {
  const { data, loading, error } = useQuery(GET_JOB_INFORMATION);

  const jobs = data?.jobs;

  return (
    <div className="jobs_container">
      {loading ? <Loader /> : null}

      {jobs
        ? jobs.map((job) => {
            return <Job key={job.id} job={job} />;
          })
        : error}
    </div>
  );
};

export default Jobs;
