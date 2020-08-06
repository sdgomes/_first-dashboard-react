import React from 'react';
import $ from "jquery";

class ToggleAside extends React.Component {
    constructor(props) {
        super(props);
        this.toggleSlide = this.toggleSlide.bind(this);
    }

    toggleSlide() {
        $(this.props.toggle).toggle("slide");
        $(this.props.toggle).first().html(this.props.children);
    }

    render() {
        return (
            <div className="aside-item" onClick={this.toggleSlide}>
                <i className={this.props.icon}></i>
            </div>
        );
    }
}

export default ToggleAside;