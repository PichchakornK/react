import { useState } from "react";

function FavoriteColor(){
    const [color, setColor] = useState("") //กำหนดค่าเริ่มต้นเป็นค่าว่าง คือยังไม่กำหนดค่าให้color

    return(
        <>
        <h1>My favorite color is: {color}</h1>{/*เรียกใช้ state color มาแสดงผล*/}
        <button onClick={() => setColor("Blue") }>Bule</button>{/*เรียกฟังก์ชัน setColor("Blue") ซึ่งจะอัปเดต state color เป็น "Blue"*/}
        <button onClick={() => setColor("Red") }>Red</button>{/*เรียกฟังก์ชัน setColor("Red") ซึ่งจะอัปเดต state color เป็น "Red"*/}
        <button onClick={() => setColor("Yellow") }>Yellow</button>{/*เรียกฟังก์ชัน setColor("Yellow") ซึ่งจะอัปเดต state color เป็น "Yellow"*/}
        </>
    )
}
export default FavoriteColor;