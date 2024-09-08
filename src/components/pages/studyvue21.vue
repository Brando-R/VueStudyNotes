<template>
    <h1>{{titlemsg}}</h1>
    <h1>{{ $route.params.titlemsg }}</h1>
    <el-icon><ChatDotRound /></el-icon>
</template>
<script>
export default {
    name: "studyvue21",
    props: {
        titlemsg: {
            type: String,
        }
    },
    setup() {
        return{
            
        }
    },
}
</script>