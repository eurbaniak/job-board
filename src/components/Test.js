import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_JOB_NAMES } from "../GraphQL/Queries";

const Test = () => {
  const [jobs, setJobs] = useState([]);

  const { data } = useQuery(GET_JOB_NAMES);

  useEffect(() => {
    if (data) {
      setJobs(data.jobs);
      console.log(data.jobs);
    }
  }, [data]);

  return (
    <div>
      {jobs.map((job) => {
        return <h1>{job.title}</h1>;
      })}
    </div>
  );
};

export default Test;
