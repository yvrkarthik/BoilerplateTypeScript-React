import "normalize.css/normalize.css";
import "./styles/styles.scss";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MainApp } from "./components/MainApp";

ReactDOM.render(<MainApp />, document.getElementById("app") as HTMLElement);
