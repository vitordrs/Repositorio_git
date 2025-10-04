<script setup>
    const props = defineProps(['estado', 'changeOperation', 'changeResult'])
</script>
<template>
    <form>
        <div class="row justify-content-center">
            <div class="col-2 text-center">
                <label v-if="props.estado.operation === '+'" for="num1">Soma 1</label>
                <label v-if="props.estado.operation === '-'" for="num1">Subtração 1</label>
                <label v-if="props.estado.operation === 'x'" for="num1">Multiplicação 1</label>
                <label v-if="props.estado.operation === '/'" for="num1">Divisão 1</label>
                <input type="number" @keyup="evento => props.changeResult(evento, 1)" class="form-control" id="num1">
            </div>
            <div class="col-1 text-center">
                <label for="operation">Operações</label>
                <select @change="evento => {props.changeOperation(evento); props.changeResult(evento, 0)}" class="form-control text-center" id="operation">
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="x">x</option>
                    <option value="/">/</option>
                </select>
            </div>
            <div class="col-2 text-center">
                <label v-if="props.estado.operation === '+'" for="num2">Soma 2</label>
                <label v-if="props.estado.operation === '-'" for="num2">Subtração 2</label>
                <label v-if="props.estado.operation === 'x'" for="num2">Multiplicação 2</label>
                <label v-if="props.estado.operation === '/'" for="num2">Divisão 2</label>
                <input type="number" @keyup="evento => props.changeResult(evento, 2)" class="form-control" id="num2">
            </div>
        </div>
    </form>
</template>