<template>
    <header>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/profile">Profile</router-link>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',
};
</script>

<style scoped>
/* Styling for your header and nav */
nav {
    background-color: #333;
    padding: 10px;
}

nav a {
    color: white;
    margin: 0 15px;
    text-decoration: none;
}
</style>
