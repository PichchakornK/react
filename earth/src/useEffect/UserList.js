// ดึงข้อมูลจาก API โดยใช้ useEffect
import { useState, useEffect } from "react";

function Userlist() {
    // สร้าง state เพื่อเก็บข้อมูลผู้ใช้ที่ดึงมาจาก API
    const [users, setUsers] = useState([]);

    // เมื่อ component โหลด ให้ไปดึงข้อมูลจาก API
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users") // ดึงข้อมูลจาก API
            .then((res) => res.json()) // แปลง response เป็น JSON
            .then((data) => setUsers(data)); // เอาข้อมูลไปเก็บใน state
    }, []); // ใส่ [] เพื่อให้รัน useEffect แค่ตอนโหลดครั้งแรก

    return (
        <ul>
            {/* แสดงชื่อผู้ใช้แต่ละคนจาก users */}
            {users.map((user) => (
                <li key={user.id}>{user.name}</li> // ต้องใส่ return (ใช้รูปแบบย่อ)
            ))}
        </ul>
    );
}

export default Userlist;
