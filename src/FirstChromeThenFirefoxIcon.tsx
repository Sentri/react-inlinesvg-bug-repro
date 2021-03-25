import * as React from "react";
import InlineSVG from "react-inlinesvg/esm";

const slowChromeIcon: string = "https://slowdistantstorage.blob.core.windows.net/public/chrome.svg";
const fastFirefoxIcon: string = "https://cdn.svgporn.com/logos/firefox.svg";

export class FirstChromeThenFirefoxIcon extends React.Component<{}, FirstChromeThenFirefoxIconState> {
    public constructor(props: {}) {
        super(props);

        this.state = {
            // Initial render starts at Chrome icon
            src: slowChromeIcon,
        }
    }
    
    public componentDidMount(): void {
        // Change the icon URL from Chrome to Firefox 1ms after mount
        window.setTimeout(() => {
            this.setState({
                src: fastFirefoxIcon,
            });
        }, 1);
    }

    public render(): React.ReactNode {
        return (
            <div style={{ display: "inline", width: 256 }}>
                <InlineSVG src={this.state.src} />
                <div>src: {this.state.src}</div>
            </div>
        );
    }
}

interface FirstChromeThenFirefoxIconState {
    src: string;
}
