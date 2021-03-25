import * as React from "react";
import * as ReactDOM from "react-dom";

import { FirstChromeThenFirefoxIcon } from "./FirstChromeThenFirefoxIcon";

class TestApp extends React.Component {

    public render(): React.ReactNode {
        return (
            <div style={{margin: "0 auto", maxWidth: 800, fontFamily: "Segoe UI,SegoeUI,\"Helvetica Neue\",Helvetica,Arial,sans-serif" }}>
                <div>
                    <h1>Network issue repro</h1>
                    <p>
                        The code below sets up a component that initially renders a Chrome icon. 
                        After 1ms the src prop is changed to point to a Firefox icon.
                        If the request for Chromium icon takes longer than the (more recent) Firefox icon,
                        then the arrival of the Chrome SVG will incorrectly overwrite the Firefox icon.
                        The result is that the src prop is set to Firefox SVG, but Chromium SVG is rendered instead.
                    </p>
                    <h2>Test below</h2>
                    <p>
                        <b>Expected:</b> Source points to Firefox SVG, Firefox SVG is rendered.
                    </p>
                    <p>
                        <b>Actual:</b> Source points to Firefox SVG, Chromium SVG is rendered.
                    </p>
                    <p>
                        Note that the result depends on your network conditions, since this is a race condition issue.
                        Clear browser cache and refresh the page if the issue does not appear.
                    </p>
                    <hr/>
                </div>
                <FirstChromeThenFirefoxIcon />
            </div>
        );
    }
}


ReactDOM.render(<TestApp/>, document.getElementById('root') );