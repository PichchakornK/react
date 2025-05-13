import { useState } from "react";

// สร้างฟังก์ชัน Todolist เป็น React Component
function Todolist(){

    // สร้าง state สำหรับเก็บรายการงานทั้งหมดในรูปแบบ array
    const [todos, setTodos] = useState([])

    // สร้าง state สำหรับเก็บข้อความที่พิมพ์ใน input (งานที่กำลังจะเพิ่ม)
    const [task, setTask] = useState("")

    // ฟังก์ชันสำหรับเพิ่มงานใหม่เข้าไปใน list
    const addTask = () => {
        // task.trim => ตรวจสอบว่ามีการพิมพ์ข้อความจริงๆ (ไม่ใช่ช่องว่าง)
        if(task.trim()){ 
            // เพิ่มงานใหม่เข้าไปใน array โดยใช้ ...todos เพื่อเก็บของเดิมไว้
            setTodos([...todos, task])

            //ใช้ setTask เคลียร์ช่อง input ให้กลับมาเป็นค่าว่างหลังจากเพิ่มงาน
            setTask("")
        }
    }

    return(
        <>
            {/* ช่อง input สำหรับพิมพ์งาน */}
            <input
                type="text"
                placeholder="เพิ่มงาน"
                value={task} // ผูกกับ state task เพื่อแสดงค่าที่พิมพ์
                onChange={(e) => setTask(e.target.value)} // เรียก onChange คือเมื่อพิมพ์ จะอัปเดตค่า task(ตามค่าที่พิมพ์) => e.target.value
            />

            {/* ปุ่มกดเพื่อเพิ่มงานลงใน list */}
            <button onClick={addTask}>เพิ่ม</button>

            {/* แสดงรายการงานที่ถูกเพิ่ม */}
            <ul>
                {todos.map((t, index) => ( //todos คืองานใน array เช่น ["ซักผ้า", "อ่านหนังสือ"] .map((t, index) => (...)) คือการวนลูปผ่านแต่ละงานในarray t คือการแทนค่าของแต่ละงาน (เช่น "ซักผ้า") index คือหมายเลขลำดับ (0, 1, 2,...)
                    // แสดงแต่ละงานในรูปแบบ <li>
                    <li key={index}>{t}</li> //key={index} ใช้ index เป็น key กำหนดรหัสเฉพาะให้แต่ละรายการในลิสต์(สำหรับReact)
                ))}
            </ul>
        </>
    )
}

export default Todolist;
