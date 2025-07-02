<template>
    <div id="app">
        <Header />
        <router-view />
    </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
    name: 'App',
    components: {
        Header,
    },
};
</script>

<style>
/* Global styles for your app */
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
}

/* Optional: If you want to ensure body stretches the full height of the page */
body {
    font-family: Arial, sans-serif;
    /* You can specify your font here */
}
</style>
