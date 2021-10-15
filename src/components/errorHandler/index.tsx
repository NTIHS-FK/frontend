import React, {ErrorInfo} from 'react';
import {ComponentProps, ErrorState} from './type';
import Snackbar from '@mui/material/Snackbar';
/**
 * Error handler component
 */
class ErrorHandler extends React.Component<ComponentProps, ErrorState> {
  // eslint-disable-next-line require-jsdoc
  constructor(props: ComponentProps) {
    super(props);
    this.state = {hasError: false, errorMessageBoxSwitch: false};
  }

  // eslint-disable-next-line require-jsdoc
  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      errorMessageSwitch: true,
      errorMessage: error.message,
    };
  }

  // eslint-disable-next-line require-jsdoc
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo.componentStack);
  }

  // eslint-disable-next-line require-jsdoc
  render() {
    if (this.state.hasError) {
      return (
        <Snackbar
          open={this.state.errorMessageBoxSwitch}
          autoHideDuration={6000}
          onClose={() => {
            this.setState({
              errorMessageBoxSwitch: false,
              errorMessageBoxContext: this.state.errorMessageBoxContext,
              hasError: false,
            });
          }}
          anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
        >
          {this.state.errorMessageBoxContext}
        </Snackbar>
      );
    }

    return this.props.children;
  }
};

export default ErrorHandler;
