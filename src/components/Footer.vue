<template>
    <header>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',
};
</script>

<style scoped>
header {
    background: #333;
    color: #fff;
    padding: 1rem;
}

nav a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
}
</style>
