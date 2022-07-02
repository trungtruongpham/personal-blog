import { gql, GraphQLClient } from "graphql-request";
import next from "next";

const graphcms = new GraphQLClient(
  "https://api-ap-northeast-1.graphcms.com/v2/cl413bnf42nsm01xjfwdi13q6/master",
  {
    // headers: {
    //   Authorization:
    //     "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTYwODYyODAsImF1ZCI6WyJodHRwczovL2FwaS1hcC1ub3J0aGVhc3QtMS5ncmFwaGNtcy5jb20vdjIvY2w0MTNibmY0Mm5zbTAxeGpmd2RpMTNxNi9tYXN0ZXIiLCJodHRwczovL21hbmFnZW1lbnQtbmV4dC5ncmFwaGNtcy5jb20iXSwiaXNzIjoiaHR0cHM6Ly9tYW5hZ2VtZW50LmdyYXBoY21zLmNvbS8iLCJzdWIiOiJkYzVmNDE3NC0yYTk2LTQyOGQtYWU2ZS02NmY3NTYzNjdjODEiLCJqdGkiOiJjbDRzbjBnOTYyOGQxMDF6NWhld3BjYWFoIn0.oKjRzjav6AtfznOaK2e9XCp0LqirYIx1IJ0mgQJS2T8wIKKdDZnCUOBi6eeI4LsEnEd8xpSQW3GjZrBsm6zeaa44HMfFu-1Y9p5-5FydwOg9DzXyjIZG_ZkoFhnUnaKrd8FZpchfMsPCIclKnrJMmd6b2Pc6SOVYZBPXK9OPUZEjvSZtS8NpJ_FfWv6KM72DF4mPvvfE4Hie_E0krqNWSYLoEabWyG4jDW8xX4z_XJnIMI_0of2N65A39H1Rmcqkk9PEypvEckZYQZchL67JaBNdLmLlbuFoPe8y29eA9yfZI-EsC11OwpDyymi4yaNTMDOUbbiqDkB26hYZr5xRvk8w13RYKnMth6f_zGMz3EgTpIzpBsCO35XxVHGJVwDWQyuaMuqiIU-L9shtSIxfPDjzn18ATEQmMDRGmRUXanGSdtPtyTAdOX3932aQFVmJ0PFgijW7gbuQeALKQ7ZCMammJ6lgMz2sWpsF74dRSyVohM2mNbpFgS90T-SZqZGDvOYuWNsC_PIePhuDCdkU18jEtzX-k7Pfddp_YSNYgu2xYgG1DL8eWym0ecRd2Ab1C5XRVJhwvnLxf_nNvuON453wzvwSbQnJwrp5_chFpZ8C1_6tB9fIsdXlpva9xKQwmhR7jvN3yEtjMYSY84nZTOjEDJ1DuPFuY3tcJTvPrII",
    // },
  }
);

const QUERY = gql`
  {
    posts {
      id
      title
      content {
        html
      }
      coverPhoto {
        id
        url(transformation: {image: {}})
        size
        width
      }
      datePublished
      type
      slug
    }
  }
`;

export async function loadPosts() {
  const res = await graphcms.request(QUERY);
  const data = res.posts;
  return data;
}
