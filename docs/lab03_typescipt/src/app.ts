// app.ts (ตัวอย่างโครงสร้างที่ถูกต้อง พร้อมเพิ่มการค้นหาด้วย Email)

import { Student } from "./models/Student.js";
import { StudentManager } from "./managers/StudentsManager.js";
// import { showList } from "./utils/showList.js"; // หากคุณใช้ showList

const manager = new StudentManager();
manager.loadFromLocalStorage(); // 1. โหลดข้อมูลเก่าทันทีที่สคริปต์เริ่ม

// ฟังก์ชันแสดงผลตาราง (ต้องอยู่ภายนอก DOMContentLoaded เพื่อเรียกใช้ได้)
function renderTable(elementId: string = "studentTableBody", data: Student[] | null = null): void {
    const tableBody = document.getElementById(elementId);
    if (!tableBody) return;

    tableBody.innerHTML = "";
    const studentsToRender = data || manager.getAllStudents(); // ใช้ data จากการค้นหา หรือทั้งหมด

    // showList<Student>(studentsToRender); // หากคุณต้องการแสดงใน Console ด้วย

    studentsToRender.forEach((s) => {
        // ตรวจสอบชื่อฟิลด์ให้ตรงกับ Student.ts
        tableBody.innerHTML += `
            <tr>
              <td>${s.id}</td>
              <td>${s.title_name}</td>          
              <td>${s.first_name}</td>     
              <td>${s.last_name}</td>     
              <td>${s.email}</td>           
              <td>${s.year}</td>
              <td>${s.major}</td>
            </tr>
        `;
    });
}

// 2. ห่อหุ้ม Event Handlers ด้วย DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    
    // ** Event Handler: เพิ่มนักศึกษา (addBtn) **
    const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
    if (addBtn) {
        addBtn.onclick = () => {
            // ดึงค่าจาก Input Fields
            const id = (document.getElementById("id") as HTMLInputElement).value;
            const title_name = (document.getElementById("title_name") as HTMLInputElement).value; 
            const first_name = (document.getElementById("first_name") as HTMLInputElement).value; 
            const last_name = (document.getElementById("last_name") as HTMLInputElement).value;   
            const email = (document.getElementById("email") as HTMLInputElement).value;           
            const year = Number((document.getElementById("year") as HTMLInputElement).value);
            const major = (document.getElementById("major") as HTMLInputElement).value;
              
            // ตรวจสอบค่าที่จำเป็น (เช่น ID ไม่ว่าง)
            if (!id || !first_name || !email) {
                alert("โปรดกรอก ID, ชื่อ และ Email ให้ครบถ้วน");
                return;
            }

            const student: Student = { id, title_name, first_name, last_name, email, year, major };
            manager.addStudent(student); // เรียก saveToLocalStorage() ภายใน

            renderTable(); // 3. แสดงผลทันทีหลังเพิ่ม

            // ล้างฟอร์มทั้งหมด
            (document.getElementById("id") as HTMLInputElement).value = '';
            (document.getElementById("title_name") as HTMLInputElement).value = ''; 
            (document.getElementById("first_name") as HTMLInputElement).value = ''; 
            (document.getElementById("last_name") as HTMLInputElement).value = ''; 
            (document.getElementById("email") as HTMLInputElement).value = ''; 
            (document.getElementById("year") as HTMLInputElement).value = ''; 
            (document.getElementById("major") as HTMLInputElement).value = ''; 
        };
    }
    
    // ** Event Handler: ค้นหาด้วยชื่อ (searchNameBtn) **
    const searchNameBtn = document.getElementById("searchNameBtn") as HTMLButtonElement;
    if (searchNameBtn) {
        searchNameBtn.onclick = () => {
            const keyword = (document.getElementById("searchName") as HTMLInputElement).value;
            const results = manager.findStudentsByName(keyword);
            
            // แสดงผลลัพธ์ในตาราง
            renderTable("studentTableBody", results); 
            alert(`ผลการค้นหา (ชื่อ/นามสกุล): ${results.length} คน`);
        };
    }

    // 🆕 Event Handler: ค้นหาด้วย Email (searchEmailBtn) 🆕
    const searchEmailBtn = document.getElementById("searchEmailBtn") as HTMLButtonElement;
    if (searchEmailBtn) {
        searchEmailBtn.onclick = () => {
            const keyword = (document.getElementById("searchEmail") as HTMLInputElement).value;
            const result = manager.findStudentByEmail(keyword);

            if (result) {
                // หากพบ ให้แสดงเฉพาะคนเดียวในรูปแบบ Array
                renderTable("studentTableBody", [result]); 
                alert(`พบนักศึกษา: ${result.first_name} ${result.last_name}`);
            } else {
                // หากไม่พบ ให้เคลียร์ตาราง
                renderTable("studentTableBody", []); 
                alert(`ไม่พบนักศึกษาที่มี Email: ${keyword}`);
            }
        };
    }
    
    // ** Event Handler: ค้นหาด้วยสาขา (searchMajorBtn) **
    const searchMajorBtn = document.getElementById("searchMajorBtn") as HTMLButtonElement;
    if (searchMajorBtn) {
        searchMajorBtn.onclick = () => {
            const keyword = (document.getElementById("searchMajor") as HTMLInputElement).value;
            const results = manager.findStudentsByMajor(keyword);

            // แสดงผลลัพธ์ในตาราง
            renderTable("studentTableBody", results); 
            alert(`พบในสาขา: ${results.length} คน`);
        };
    }


    // 4. เรียก renderTable ครั้งแรก เพื่อแสดงข้อมูลที่โหลดมาจาก localStorage
    renderTable("studentTableBody");
});