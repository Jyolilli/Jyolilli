import React from 'react';
import '../App.scss';
import Layout from './Layout';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCoffee,
  faHeart,
  faTrash,
  faAngleDoubleRight,
  faComment,
} from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Article from './Article';
import ArticleForm from './ArticleForm'

library.add(faCoffee, faHeart, faTrash, faAngleDoubleRight, faComment);

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <main className="main-component">
            <section>
              <Layout />
            </section>
          </main>
        </Route>
        <Route exact path="/article/create/">
          <Link to="/">Go back</Link>
          <ArticleForm />
        </Route>
        <Route exact path="/article/edit/:id">
          <Link to="/">Go back</Link>
          {/* <ArticleForm article={fetchData(useParam('id'))} /> */}
          <ArticleForm />
        </Route>
          <Route exact path="/article/:id">
          <Link to="/">Go back</Link>
          <Article />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
// <Route path="/" component={<MyComponent />}>

//  <Route path="/"><stuff /></Route>

//  <Route path="/" render={() => <stuff arg={myArg} />}>
