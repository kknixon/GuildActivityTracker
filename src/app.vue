<template>
    <div id="app">
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </nav>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App',
};
</script>

<style>
/* Add some basic styling */
nav {
    margin-bottom: 20px;
}

nav a {
    margin: 0 10px;
    text-decoration: none;
}
</style>
