<template>
  <nav class="navbar">
    <router-link class="logo" to="/">
      <img alt="Logo" src="@/assets/logo.png">
    </router-link>
    <div class="links">
      <div v-for="(element, id) in links" :key="id" class="link">
        <router-link :to="element.path">{{ element.name }}</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "PublicNav",
  data() {
    return {
      links: [
        {name: "About", path: "/"},
        {name: "Map", path: "/map"},
        {name: "Events", path: "/events"},
      ],
    };
  },
}
</script>

<style>
.navbar {
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;

  position: fixed;

  background-color: #000;

  z-index: 1000;

  .logo img {
    height: 50px;
    max-width: 15vw;
  }

  .links {
    width: 80vw;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 30px;

    .link {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 1.2rem;
        font-weight: 500;
        padding-bottom: 5px;
        border-bottom: 3px solid transparent;
        transition: all 0.2s ease-in-out;

        &.router-link-active {
          color: yellow;
          border-bottom: 3px solid yellow;
        }

        &:hover {
          border-bottom: 3px solid #6e6e53;
        }
      }
    }
  }
}
</style>