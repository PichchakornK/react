// ดึง useContext และ Context ที่สร้างไว้มาใช้
import { useContext } from "react";
import { UserContext } from "./UserContext";

function LoginButton() {
  // ดึง setUser จาก Context เพื่อใช้ตั้งค่าผู้ใช้
  const { setUser } = useContext(UserContext);

  // เมื่อคลิกปุ่มจะตั้งค่า user ใหม่ (จำลองการ login)
  const handleLogin = () => {
    setUser({ name: "Tienwalitearth" }); // กำหนดชื่อ user
  };

  return <button onClick={handleLogin}>เข้าสู่ระบบ</button>;
}

export default LoginButton;
