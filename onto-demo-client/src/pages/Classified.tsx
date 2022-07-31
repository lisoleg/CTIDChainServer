import React from "react"
import ProtectedResource from "./ProtectedResource";

export default class Landing extends ProtectedResource {

  render() {
    if (this.isAuthenticated()) {
      return (
          <div>
            <br></br>
            <h5>自然人DID：{this.props.AuthResponse.userDID}</h5>
            <br></br>
            <h5>贵宾姓名：{this.props.AuthResponse.lastName} {this.props.AuthResponse.firstName}</h5><br></br>
            <h5>客房名：{this.props.AuthResponse.youtubeChannelName}</h5><br></br>
            <h5>客房号：{this.props.AuthResponse.youtubeChannelId}</h5><br></br>
            <h5>客房图片：{this.props.AuthResponse.youtubeChannelImageURL}</h5><br></br>
            <h5>客房视频：{this.props.AuthResponse.youtubeChannelURL}</h5><br></br>
          </div>
      )
    } else {
      return this.accessDenied();
    }
  }
}
