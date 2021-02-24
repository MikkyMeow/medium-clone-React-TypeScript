import Articles from 'components/pages/Articles';
import GlobalFeed from 'components/pages/GlobalFeed';
import { Switch, Route } from 'react-router-dom';

const Router = () => {
  return (
    <Switch>
      <Route path="/" component={GlobalFeed} exact />
      <Route path="/articles/:slug" component={Articles} />
    </Switch>
  );
};

export default Router;
