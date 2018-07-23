import * as React from "react";
import { Header } from "../components/Header";

export class MainApp extends React.Component {
	private _language: string = "TypeScript";
	private _compiler: string = " TSC compiler command.";
	public render(): JSX.Element {
		return (
			<div>
				<Header language={this._language} compiler={this._compiler} />
			</div>
		);
	}
}
