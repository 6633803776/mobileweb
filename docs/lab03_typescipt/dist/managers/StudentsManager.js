export class StudentManager {
    constructor() {
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
        this.saveToLocalStorage();
    }
    getAllStudents() {
        return this.students;
    }
    findStudentByID(id) {
        return this.students.find(s => s.id === id);
    }
    // 1. แก้ไข findStudentsByName ให้ค้นหาจาก first_name หรือ last_name
    findStudentsByName(name) {
        const searchName = name.toLowerCase();
        return this.students.filter(s => s.first_name.toLowerCase().includes(searchName) ||
            s.last_name.toLowerCase().includes(searchName));
    }
    findStudentsByMajor(major) {
        return this.students.filter(s => s.major.toLowerCase().includes(major.toLowerCase()));
    }
    // 2. เพิ่มคำสั่ง findStudentByEmail
    findStudentByEmail(email) {
        return this.students.find(s => s.email === email);
    }
    saveToLocalStorage() {
        localStorage.setItem("students", JSON.stringify(this.students));
    }
    loadFromLocalStorage() {
        const data = localStorage.getItem("students");
        if (data) {
            this.students = JSON.parse(data);
        }
    }
}
