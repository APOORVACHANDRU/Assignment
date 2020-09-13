import React from 'react';
// import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
// import { FormattedMessage } from 'react-intl';
import './styles.css';

// import HOC from '../../hoc/SessionTimeout';

const Loading = () => (
  <Dialog open aria-labelledby="simple-dialog-title">
    <div className="loaderStyle">
      <CircularProgress />
      <p className="labelLoadingStyle">
        {'Loading'}
      </p>
    </div>
  </Dialog>
);

export default Loading;
