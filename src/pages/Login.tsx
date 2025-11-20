import { LoginCard } from "../components/widgets/LoginCard";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <div className="flex w-screen h-screen items-center justify-center relative bg-neutral-100">
      <LoginCard onLogin={handleLogin} />
    </div>
  );
};
