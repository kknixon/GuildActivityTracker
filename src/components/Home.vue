<template>
    <section class="hero-section">
        <div class="hero-content">
            <h1 class="hero-title">Welcome to Da Boyz</h1>
            <p class="hero-subtitle">A guild forged in darkness, rising to greatness. Join us on our epic journey!</p>
            <router-link to="#join-us" class="cta-button">Join the Alliance</router-link>
        </div>
        <div class="hero-background">
            <img src="@/assets/dh.png" alt="Voidling with a Crown" class="hero-image" />
        </div>
    </section>
</template>

<script>
export default {
    name: 'Home',
};
</script>

<style scoped>
/* Add your styles here */
.hero-section {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #2a2a2a;
    color: #f1f1f1;
    font-family: 'Arial', sans-serif;
    text-align: center;
    overflow: hidden;
}

.hero-content {
    z-index: 10;
    max-width: 800px;
    padding: 20px;
}

.hero-title {
    font-size: 4rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 4px;
    color: #b2b2b2;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
}

.hero-subtitle {
    font-size: 1.5rem;
    font-weight: 300;
    color: #d6d6d6;
    margin-top: 10px;
}

.cta-button {
    display: inline-block;
    padding: 15px 30px;
    font-size: 1.2rem;
    font-weight: bold;
    background-color: #555;
    color: #f1f1f1;
    text-transform: uppercase;
    border: none;
    border-radius: 30px;
    margin-top: 20px;
    text-decoration: none;
    transition: background-color 0.3s ease;
}

.cta-button:hover {
    background-color: #a1a1a1;
}

.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('@/assets/background1.jpg');
    background-size: cover;
    background-position: center;
    z-index: 1;
    filter: blur(5px);
}

.hero-image {
    width: 300px;
    height: auto;
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
    margin-top: 40px;
}
</style>
