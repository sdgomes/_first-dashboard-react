import React from 'react';

class ToggleAside extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="position-relative">
                <div className="py-3">
                    {this.props.children}
                </div>
                <div id="AsideToggle" className="container p-0 stayed-right negative">
                    <div className="aside-wrapper"></div>
                </div>
            </div>
        );
    }
}

export default ToggleAside;