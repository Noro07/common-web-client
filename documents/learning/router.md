# React router 4

## browserRouter

```js
<Provider store={store}>
  <Router> // use browserRouter
    <Switch>
      <Route path='/' component={Home} />
    </Switch>
  </Router>
</Provider>
```

## hashRouter with sub-router

In sub-router, we have to use `exact` in `path='/'`

```js
<HashRouter>
  <Provider store={store}>
    <Switch>
      <Route path='/login' component={login} />
      <APP>
        <Route exact path='/' component={Homepage} /> 
      </APP>
    </Switch>  
  </Provider>
</HashRouter>

```
