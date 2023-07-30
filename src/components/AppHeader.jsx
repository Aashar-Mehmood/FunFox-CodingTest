import funfox from "../assets/funFoxRm.png";
import { userLogout } from "../services/auth";
export default function AppHeader() {
  return (
    <div className="flex-1 flex justify-between items-center">
      <img
        src={funfox}
        alt="funfox"
        data-testid="logo image"
        className="w-32 relative -left-4"
      />
      <div className="flex items-center gap-3">
        <button
          className="text-white bg-transparent border-none cursor-pointer p-2"
          onClick={userLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
