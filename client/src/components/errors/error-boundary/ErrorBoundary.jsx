import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: '',
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      errorMessage: error.message || 'Something went wrong.',
    };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an external service
    console.error('ErrorBoundary caught an error', error, errorInfo);
    // TODO: Implement a function to send the error to a logging service
    // logErrorToService(error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, errorMessage: '' });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={styles.errorContainer}>
          <h1>Something went wrong.</h1>
          <p>{this.state.errorMessage}</p>
          <div style={styles.buttonContainer}>
            <button onClick={this.handleRetry} style={styles.button}>
              Retry
            </button>
            <Link to="/" style={styles.button}>
              Go Home
            </Link>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const styles = {
  errorContainer: {
    textAlign: 'center',
    marginTop: '50px',
  },
  buttonContainer: {
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    margin: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
  },
};

export default ErrorBoundary;
