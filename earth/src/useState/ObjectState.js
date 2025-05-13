import { useState } from "react";

function ObjectState(){
    // สร้าง Object มากำหนดค่ามี 2 field คือ name และ email 
    // setForm คือฟังก์ชันสำหรับอัปเดตค่าของ form
    const [form, setForm] = useState({name:"", email:""})

    return(
        <>
            {/* สร้าง input สำหรับกรอกชื่อ (name) */}
            <input 
                type="text"
                placeholder="name"
                value={form.name}  
                // ผูกค่าที่จะส่งให้ Object state => form.name
                onChange={(e) => setForm({
                    ...form, // ดึงข้อมูลเดิมจาก form มาไว้ก่อน
                    name: e.target.value //name: e.target.value คือการใส่ค่าที่เราพิมพ์ลงไปใหม่ในช่อง name และอัปเดตเฉพาะ name
                })}
            />

            {/* สร้าง input สำหรับกรอก email */}
            <input
                type="text"
                placeholder="email"
                value={form.email} 
                onChange={(e) => setForm({
                    ...form, // ดึงข้อมูลเดิมจาก form
                    email: e.target.value // email: e.target.value คือการใส่ค่าที่เราพิมพ์ลงไปใหม่ในช่อง email และอัปเดตเฉพาะ email
                })}
            />
            <p>Name: {form.name}</p>
            <p>Email: {form.email}</p>
        </>
    )
}

export default ObjectState;
