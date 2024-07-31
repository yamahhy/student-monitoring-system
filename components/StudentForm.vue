<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <h1>Student Form</h1>
            <div>
                <label for="name">Name</label>
                <input v-model="form.name" type="text" id="name"/>
            </div>
            <div>
                <label for="age">Age</label>
                <input v-model="form.age" type="number" id="age"/>
            </div>
            <div>
                <label for="gender">Gender</label>
                <select v-model="form.gender" id="gender">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div>
                <label for="year">Year</label>
                <input v-model="form.year" type="text" id="year"/>
            </div>
            <div>
                <label for="program">Program</label>
                <input v-model="form.program" type="text" id="program"/>
            </div>
            <div>
                <label for="religion">Religion</label>
                <input v-model="form.religion" type="text" id="religion"/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
const emit = defineEmits(['create', 'update'])
const props = defineProps(['initialData'])

const form = ref({ id: null, name: '', age: null, gender: '', year: '', program: '', religion: '' })

watch(() => props.initialData, (newVal) => {
    form.value = newVal ? { ...newVal } : { id: null, name: '', age: null, gender: '', year: '', program: '', religion: '' }
}, { immediate: true })

const handleSubmit = () => {
    if (form.value.id) {
        emit('update', form.value)
    } else {
        emit('create', form.value)
    }
}
</script>
