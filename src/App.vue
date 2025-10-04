<script setup>
  import {reactive} from 'vue'
  import Header from './components/Header.vue';
  import Form from './components/Form.vue';
  import Result from './components/Result.vue';

  let estado = reactive({
    operation: '+',
    num1: 0,
    num2: 0,
    result: 0
  })

  const changeOperation = evento => estado.operation = evento.target.value

  function getOperationExtends(){
    const {operation} = estado;
    switch(operation){
      case '+':
        return 'soma'
      case '-':
        return 'subtração'
      case 'x':
        return 'multiplicação'
      case '/':
        return 'divisão'
    }
  }

  function changeResult(evento, anyNum){
    if(anyNum === 1){
      estado.num1 = Number(evento.target.value)
    }else if(anyNum === 2){
      estado.num2 = Number(evento.target.value)
    }
    const {operation, num1, num2} = estado;
    switch(operation){
      case '+':
        estado.result = num1 + num2;
        break;
      case '-':
        estado.result = num1 - num2;
        break;
      case 'x':
        estado.result = num1 * num2;
        break;
      case '/':
        estado.result = num2 !==0 ? num1 / num2 : "Impossível dividir por 0";
        break;
    }
  }
</script>

<template>
  <div class="container">
    <Header />
    <Form :estado="estado" :changeOperation="changeOperation" :changeResult="changeResult" />
    <Result :estado="estado" :getOperationExtends="getOperationExtends" />
  </div>
</template>

<style scoped>

</style>