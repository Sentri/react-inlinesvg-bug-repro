import * as React from "react";
import * as ReactDOM from "react-dom";

import { QuickSwapIcon } from "./QuickSwapIcon";

class TestApp extends React.Component {

    public render(): React.ReactNode {
        return <>
            <QuickSwapIcon />
            <QuickSwapIcon />
            <QuickSwapIcon />
            <QuickSwapIcon />
            <QuickSwapIcon />
        </>;
    }
}


ReactDOM.render(<TestApp/>, document.getElementById('root') );