import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { fetchUser } from '../actions/index';

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
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'use react-chartjs-2',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };
    return (
      <div className="landing-app">
        {`Hello, ${user}!`}
        <div className="chart-container">
          <Line data={data} />
        </div>
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
