import React, {Component, ErrorInfo, ReactNode} from 'react';
import {Text} from 'react-native';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };
  // update state so the next render will show the fallback UI
  public static getDerivedStateFromError(_: Error): State { 
    return {hasError: true};
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <Text>There was an error</Text>;
    }

    return this.props.children;
  }
}
