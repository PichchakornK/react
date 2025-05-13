// ดึง useContext และ Context มาใช้
import { useContext } from "react";
import { UserContext } from "./UserContext";

function LogoutButton() {
  // ดึง setUser เพื่อใช้ลบข้อมูลผู้ใช้
  const { setUser } = useContext(UserContext);

  // เมื่อคลิกปุ่มจะลบ user ออกจากระบบ (set เป็น null)
  const handleLogout = () => {
    setUser(null);
  };

  return <button onClick={handleLogout}>ออกจากระบบ</button>;
}

export default LogoutButton;
