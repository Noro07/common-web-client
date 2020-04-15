import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchUser } from '../actions/index';
import Calendar from '../components/Calendar';
import LineChart from '../components/LineChart';

export class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const { loadUser } = this.props;
    loadUser();
  }

  render() {
    const { user } = this.props;
    return (
      <div className="landing-app">
        {`Hello, ${user} !`}
        <LineChart />
        <Calendar />
      </div>
    );
  }
}

App.propTypes = {
  user: PropTypes.string,
  loadUser: PropTypes.func.isRequired
};

App.defaultProps = {
  user: 'default user 1'
};

const mapStateToProps = (state) => ({
  user: state.landing.user
});

const mapDispatchToProps = (dispatch) => ({
  loadUser(state) {
    dispatch(fetchUser(state));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
