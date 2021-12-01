import * as React from 'react';
export class ColorredText extends React.Component {
    constructor() {
        super();
        this.state = {
            color: "Orange",
            background:"Black"
        };
    }

    onBackGroundChange = (event) => {
        this.setState({
            background: event.target.value
        });
    }
    onColorChange = (event) => {
        this.setState({
            color: event.target.value
        });
    }
    render() {
        return (
            <div>
                <div onChange={this.onBackGroundChange}>
                    <input type="radio" value="Yellow" name="background"></input> <span>Yellow</span>
                    <input type="radio" value="DarkKhaki" name="background"></input> <span>DarkKhaki</span>
                    <input type="radio" value="Aqua" name="background"></input> <span>Aqua</span>
                </div>
                <div onChange={this.onColorChange}>
                    <input type="radio" value="Red" name="color"></input> <span>Red</span>
                    <input type="radio" value="Green" name="color"></input> <span>Green</span>
                    <input type="radio" value="Blue" name="color"></input> <span>Blue</span>
                </div>
                <p style={{ color: this.state.color, background: this.state.background }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
           
        );
    }
}