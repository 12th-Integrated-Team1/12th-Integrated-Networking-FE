import Sidebar from "../components/widgets/Sidebar";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="flex w-screen h-screen items-center gap-0 relative bg-neutral-100">
      <Sidebar onLogout={handleLogout} />
      <div className="flex flex-col self-stretch items-center">Body</div>
    </div>
  );
}
