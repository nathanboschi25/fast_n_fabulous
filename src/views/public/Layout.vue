<template>
    <div class="public">
        <PublicNav />
        <router-view />
    </div>
</template>

<script>
import PublicNav from "@/components/public/Navbar.vue";

export default {
    name: "PublicLayout",
    components: {
        PublicNav
    }
}
</script>

<style lang="scss">
html, body {
    margin: 0;
    padding: 0;
}
</style>