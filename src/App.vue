<template>
  <div>导航栏 | <router-link to="/">Origami</router-link> | <router-link to="/xxx">Origami2</router-link></div>
  <hr/>
  <router-view />
</template>

<script>


export default {
  name: 'App',
}
</script>
