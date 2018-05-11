import * as React from "react";
import { Header } from "./Header";

export class MainApp extends React.Component {
  private _language: string = "TypeScript";
  private _compiler: string = " TSC compiler command.";
  appStartedRunning() {
    console.log("App has started running!!!!");
  }

  render() {
    return (
      <div>
        <Header language={this._language} compiler={this._compiler} />
      </div>
    );
  }
}
