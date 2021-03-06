import React from "react";
import "./Nickname.css";
class Nickname extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="m_Signup_Nickname">
        <span>닉네임</span>
        <br />
        <input
          placeholder="이름을 입력하세요"
          value={this.props.value}
          onChange={this.props.handleNickname}
        />
        <button onClick={this.props.checkNickname}>중복체크</button>
      </div>
    );
  }
}

export default Nickname;
