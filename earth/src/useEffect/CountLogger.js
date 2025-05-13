//Example ตรวจจับการเปลี่ยนเเปลงของ state
import { useEffect, useState } from "react";

function CountLogger(){
    const [count, setCount] = useState(0) //ตั้งค่าเริ่มต้นของ count ให้เป็น 0

    useEffect(() =>{
        console.log("ค่าของ count เปลี่ยนเป็น ", count)//ใช้useEffect เรียก state count มาแสดง*เมื่อค่าของcountเปลี่ยนเเปลง*
    }, [count]) //ตรวจจับค่า count ทุกครั้งที่ค่า count เปลี่ยน useEffect จะรัน

    return(
        <>
        <h1>ค่าของ count คือ {count}</h1>{/*เรียกstate countมาแสดง*/}
        <button onClick={() => setCount(count + 1)}>เพิ่ม</button> {/*เมื่อคลิกจะเพิ่มค่าcount 1ค่า*/}
        </>
    )
}
export default CountLogger;