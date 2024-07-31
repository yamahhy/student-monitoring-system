<template>
    <div class="student-list">
        <ul>
            <li v-for="student in students" :key="student.id" class="student-item">
                <div class="student-details">
                    <p><strong>{{ student.name }}</strong></p>
                    <p>Age: {{ student.age }} years old</p>
                    <p>Gender: {{ student.gender }}</p>
                    <p>Year: {{ student.year }}</p>
                    <p>Program: {{ student.program }}</p>
                    <p>Religion: {{ student.religion }}</p>
                </div>
                <div class="student-actions">
                    <button @click="editStudent(student)" class="edit">Edit</button>
                    <button @click="deleteStudent(student.id)" class="delete">Delete</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps(['students'])
const emit = defineEmits(['edit', 'delete'])

const editStudent = (student) => {
    emit('edit', student)
}

const deleteStudent = (studentId) => {
    emit('delete', studentId)
}
</script>
