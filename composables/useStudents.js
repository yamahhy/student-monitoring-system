import { ref, onMounted } from 'vue'

export const useStudents = () => {
    const students = ref([])
    const currentStudent = ref(null)

    const saveToLocalStorage = () => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('students', JSON.stringify(students.value))
        }
    }

    const loadFromLocalStorage = () => {
        if (typeof window !== 'undefined') {
            const storedStudents = localStorage.getItem('students')
            students.value = storedStudents ? JSON.parse(storedStudents) : []
        }
    }

    const createStudent = (student) => {
        students.value.push({ ...student, id: Date.now() })
        currentStudent.value = null
        saveToLocalStorage()
    }

    const readStudents = () => {
        return students.value
    }

    const updateStudent = (updatedStudent) => {
        const index = students.value.findIndex(student => student.id === updatedStudent.id)
        if (index !== -1) {
            students.value[index] = updatedStudent
            currentStudent.value = null
            saveToLocalStorage()
        }
    }

    const deleteStudent = (studentId) => {
        students.value = students.value.filter(student => student.id !== studentId)
        saveToLocalStorage()
    }

    const editStudent = (student) => {
        currentStudent.value = { ...student }
    }

    onMounted(() => {
        loadFromLocalStorage()
    })

    return {
        students,
        currentStudent,
        createStudent,
        readStudents,
        updateStudent,
        deleteStudent,
        editStudent,
    }
}
