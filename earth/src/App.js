import './App.css';
//import FavoriteColor from './useState/FavoriteColor';
//import ObjectState from './useState/ObjectState';
//import Todolist from './useState/ArrayState';
//import CountLogger from './useEffect/CountLogger';
//import Clock from './useEffect/Clock';
//import Userlist from './useEffect/UserList';
//import MultiplyWatcher from './useEffect/MultiplyWatcher';
import { useState } from 'react';
import Header from './useContext/Header';
import LoginButton from './useContext/LoginButton';
import LogoutButton from './useContext/LogoutButton';
import { UserContext } from "./useContext/UserContext";

function App() {
  // สร้าง state สำหรับ user เริ่มต้นเป็น null (ยังไม่ล็อกอิน)
  const [user, setUser] = useState(null);

  return (
    // ใช้ UserContext.Provider ครอบ component ทั้งหมด
    // เพื่อให้ทุก component เข้าถึง user และ setUser ได้
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <Header />
        {/* ถ้ามี user ให้แสดงปุ่ม logout, ถ้ายังไม่มีให้แสดงปุ่ม login */}
        {user ? <LogoutButton /> : <LoginButton />}
      </div>
    </UserContext.Provider>
  );
}

export default App;
