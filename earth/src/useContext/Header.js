// นำเข้า useContext เพื่อดึงค่าจาก Context
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Header() {
  // ดึงค่า user จาก Context
  const { user } = useContext(UserContext);

  return (
    <>
      {/* ถ้ามี user ให้แสดงชื่อ ถ้าไม่มีให้บอกให้ล็อกอิน */}
      <h1>{user ? `ยินดีต้อนรับ,  ${user.name}` : "กรุณาล็อกอิน"}</h1>
    </>
  );
}

export default Header;
