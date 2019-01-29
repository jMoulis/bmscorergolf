import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import { NotFound } from '../NotFound';
import { Header, Footer, Content, NavBar } from '../Layout';

const App = () => {
  return (
    <Fragment>
      <Header>
        <NavBar logo />
      </Header>
      <Content>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Content>
      <Footer>Footer</Footer>
    </Fragment>
  );
};

App.propTypes = {};

export default App;
