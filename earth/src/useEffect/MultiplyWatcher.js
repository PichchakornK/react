import { useState, useEffect } from "react";

function MultiplyWatcher() {
  // สร้าง state สำหรับเก็บค่าตัวเลข a เริ่มต้นเป็น 1
  const [a, setA] = useState(1);

  // สร้าง state สำหรับเก็บค่าตัวเลข b เริ่มต้นเป็น 1
  const [b, setB] = useState(1);

  // สร้าง state สำหรับเก็บผลลัพธ์ของการคูณ เริ่มต้นเป็น 1
  const [result, setResult] = useState(1);

  // เมื่อค่า a หรือ b เปลี่ยน ให้คำนวณผลลัพธ์ใหม่และอัปเดต result
  useEffect(() => {
    setResult(a * b); // คูณ a กับ b แล้วเก็บใน result
  }, [a, b]); // รัน useEffect ทุกครั้งที่ a หรือ b เปลี่ยน

  return (
    <>
      {/* ช่อง input สำหรับกรอกตัวเลข a */}
      <input
        type="number"
        value={a}
        onChange={(e) => setA(Number(e.target.value))} // แปลงเป็นตัวเลขแล้วเก็บใน state a
      />

      {/* ช่อง input สำหรับกรอกตัวเลข b */}
      <input
        type="number"
        value={b}
        onChange={(e) => setB(Number(e.target.value))} // แปลงเป็นตัวเลขแล้วเก็บใน state b
      />

      {/* แสดงผลลัพธ์การคูณ */}
      <p>{a} x {b} = {result}</p>
    </>
  );
}

export default MultiplyWatcher;
