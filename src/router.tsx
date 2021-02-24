import Articles from 'pages/Articles';
import Auth from 'pages/Auth';
import GlobalFeed from 'pages/GlobalFeed';
import { Switch, Route } from 'react-router-dom';

const Router = () => {
  return (
    <Switch>
      <Route path="/" component={GlobalFeed} exact />
      <Route path="/articles/:slug" component={Articles} />
      <Route path="/login" component={Auth} />
      <Route path="/register" component={Auth} />
    </Switch>
  );
};

export default Router;
