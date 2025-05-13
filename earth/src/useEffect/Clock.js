import { useState, useEffect } from "react";

function Clock() {
  // สร้าง state สำหรับเก็บเวลาปัจจุบันในรูปแบบ hh:mm:ss
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // ใช้ useEffect เพื่อทำงานตอน component โหลด และตั้ง interval
  useEffect(() => {
    // สร้าง interval ที่จะทำงานทุก ๆ 1000 มิลลิวินาที (1 วินาที)
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString()); // อัปเดตเวลาใหม่
    }, 1000);

    // คืนค่าเป็นฟังก์ชันล้าง interval เมื่อ component ถูกถอดออกจากหน้าจอ
    return () => {
      clearInterval(interval);
    };
  }, []); // ว่างไว้เพื่อให้ทำแค่ครั้งเดียวตอนโหลด component

  // แสดงเวลาในรูปแบบข้อความ
  return <h2>เวลา: {time}</h2>;
}

export default Clock;
