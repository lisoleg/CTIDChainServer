import React from "react";
import {Link} from 'react-router-dom';
import ProtectedResource from "../pages/ProtectedResource";


export default class Nav extends ProtectedResource {

  render() {
    return (
        <div
            style={{
              padding: "10px",
              width: "10em",
              height: "50em",
              background: "#f0f0f0"
            }}
        >
          <ul style={{listStyleType: "none", padding: 0}}>
            <li>
              <Link to="/">欢迎页</Link>
            </li>
            {this.protectedResources()}
          </ul>
        </div>
    );
  }

  private protectedResources() {
    if (this.isAuthenticated()) {
      return <>
        <li>
          <Link to="/classified">展会工作人员入住信息</Link>
        </li>
      </>;
    } else {
      return null
    }
  }
}