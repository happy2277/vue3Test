<script setup lang="ts">
import TheWelcome from "../components/TheWelcome.vue"
import { DatePicker } from "ant-design-vue"
import { ref, defineProps, reactive, withDefaults } from "vue"
interface Book {
    title: string
    auto?: string
}
const { title = "zhou er" } = defineProps<Book>()
const book = ref(1)
function bookAdd() {
    book.value++
    console.log(book.value)
}
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface
}
interface ClockInterface {
    tick()
}

function createClock(
    ctor: ClockConstructor,
    hour: number,
    minute: number
): ClockInterface {
    return new ctor(hour, minute)
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) {}
    tick() {
        console.log("beep beep")
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) {}
    tick() {
        console.log("tick tock")
    }
}

let digital = createClock(DigitalClock, 12, 17)
let analog = createClock(AnalogClock, 7, 32)
console.log(digital, analog)

const el = ref()
el.value = `
    <div style="width: 20px;height:20px;background-color: cyan;"><div>
`

function render() {
    return book.value ? "<div>yes</div>" : "<span>no</span>"
}
</script>

<template>
    <main class="main">
        {{title}}
        {{book}}
        <button @click="title += '111'">++</button>
        <button @click="bookAdd">--</button>
        <div class="red" v-html="render()"></div>
        <TheWelcome />

        <DatePicker />

    </main>
</template>
<style lang="less" scoped>
.main {
    background: #f2f2f2;
    .red {
        color: #ff0000;
    }
}
</style>