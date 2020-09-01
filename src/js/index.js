
import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

Sentry.init({
    dsn: "http://c4e5aad16fc942bbaec0dd3ef3903a72@localhost:9000/5",
    integrations: [
      new Integrations.BrowserTracing(),
    ],
    tracesSampleRate: 1.0,
  });


class App extends React.Component {
    render() {
        return <h1 onClick={this.handleClick}> Hello, world! </h1>
    }

    handleClick() {
        console.log(1);
        let s = errortest;
       
    }
}
ReactDOM.render(<App/> , document.getElementById("root"));
