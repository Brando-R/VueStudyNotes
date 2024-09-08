<template>
    <div class="studyvue">
        <h1>{{ titlemsg }}</h1>
        <h1>{{ $route.params.titlemsg }}</h1>
        <h3>暂时无笔记</h3>
    </div>
</template>

<script>
export default {
    name: 'StudyVue13',
    props: {
        titlemsg: {
            type: String,
            // default: 'Hello Vue 13'
        }
    },
    data() {
        return {
           
        }
    },
    
}
</script>