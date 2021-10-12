import { gql } from "@apollo/client";

export const GET_JOB_NAMES = gql`
  query {
    jobs {
      title
    }
  }
`;

export const GET_JOB_INFORMATION = gql`
  query {
    jobs {
      id
      title
      commitment {
        slug
      }
      postedAt
      locationNames
      company {
        name
        logoUrl
      }
    }
  }
`;
