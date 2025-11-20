import { DaySun } from "../img/DaySun";
import Button from "../html/Button";
import Input from "../html/Input";

export const LoginCard = () => {
  return (
    <div className="login-card">
      <div className="login-logo">
        <DaySun className="login-logo-image" />
        <div className="login-logo-title">The Weather App</div>
      </div>

      <div className="login-input-container">
        <div className="login-input-inputs">
          <Input
            wrapperClassName="login-input-box"
            placeholder="아이디를 입력하세요"
          />

          <Input
            wrapperClassName="login-input-box"
            placeholder="비밀번호를 입력하세요"
            type="password"
          />
        </div>

        <Button className="login-button-box">
          <div className="login-button-text">로그인</div>
        </Button>
      </div>
    </div>
  );
};
