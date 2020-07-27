import React from "react";
export default class loginInfo extends React.Component {
    render() {
        return <div className="login-info">{this.props.children}</div>;
    }
}
