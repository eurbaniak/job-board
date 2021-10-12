import "./index.scss";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import Header from "./components/header/index.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchBanner from "./components/search_banner/index";
import Jobs from "components/jobs";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const link = from([
  errorLink,
  new HttpLink({
    uri: "https://api.graphql.jobs/",
  }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

const App = () => {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Header />
        <SearchBanner />
        <Switch>
          <Route path="/jobs" component={Jobs} />
          <Route path="/" />
          <Route path="/" />
        </Switch>
      </ApolloProvider>
    </Router>
  );
};

export default App;
