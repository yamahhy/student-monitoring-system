<template>
    <div class="container">
        <h1>Student Management System</h1>
        <StudentForm :initialData="currentStudent" @create="createStudent" @update="updateStudent"/>
        <StudentList :students="students" @edit="editStudent" @delete="deleteStudent"/>
    </div>
</template>

<script setup>
import StudentForm from '~/components/StudentForm.vue'
import StudentList from '~/components/StudentList.vue'
import { useStudents } from '~/composables/useStudents'

const { students, currentStudent, createStudent, updateStudent, deleteStudent } = useStudents()

const editStudent = (student) => {
    currentStudent.value = { ...student }
}
</script>
