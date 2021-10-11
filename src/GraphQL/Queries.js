import { gql } from "@apollo/client";

export const GET_JOB_NAMES = gql`
  query {
    jobs {
      title
    }
  }
`;
