import * as React from "react";

export interface IProps {
  language: string;
  compiler: string;
}

export class Header extends React.Component<IProps, {}> {
  render() {
    return (
      <div>
        <h3>
          Hello from your project is now running {this.props.language} and
          {this.props.compiler}
        </h3>
      </div>
    );
  }
}
