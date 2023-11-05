<template>
  <div>
    <div class="header">
      <div class="image-bg"></div>
      <div class="title">FAST & FABULOUS</div>
    </div>
    <div class="scroll-please">
      <i class="material"></i>
    </div>

    <div class="block">
      <div class="title">Ceci est un titre de niveau 2</div>
      <div class="content">
        <div class="text">
          <h3>Ceci est un titre de niveau 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, cumque delectus dolor enim esse et
            harum ipsam iure, magni mollitia nesciunt, perspiciatis praesentium quae quas qui quod reiciendis saepe
            voluptatum!</p>
        </div>
        <div class="image">
          <img alt="Paul Ricard Fly View" src="@/assets/pictures/paul_ricard_fly_view.jpg">
        </div>
      </div>
      <div class="content">
        <div class="text">
          <h3>Ceci est un titre de niveau 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, cumque delectus dolor enim esse et
            harum ipsam iure, magni mollitia nesciunt, perspiciatis praesentium quae quas qui quod reiciendis saepe
            voluptatum!</p>
        </div>
        <div class="image">
          <img alt="Paul Ricard Fly View" src="@/assets/pictures/paul_ricard_fly_view.jpg">
        </div>
      </div>
      <div class="content">
        <div class="text">
          <h3>Ceci est un titre de niveau 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, cumque delectus dolor enim esse et
            harum ipsam iure, magni mollitia nesciunt, perspiciatis praesentium quae quas qui quod reiciendis saepe
            voluptatum!</p>
        </div>
        <div class="image">
          <img alt="Paul Ricard Fly View" src="@/assets/pictures/paul_ricard_fly_view.jpg">
        </div>
      </div>
    </div>

    <div class="block">
      <div class="title">Ceci est un titre de niveau 2</div>
      <div class="content">
        <div class="text">
          <h3>Ceci est un titre de niveau 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, cumque delectus dolor enim esse et
            harum ipsam iure, magni mollitia nesciunt, perspiciatis praesentium quae quas qui quod reiciendis saepe
            voluptatum!</p>
        </div>
        <div class="image"></div>
      </div>
      <div class="content">
        <div class="text">
          <h3>Ceci est un titre de niveau 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, cumque delectus dolor enim esse et
            harum ipsam iure, magni mollitia nesciunt, perspiciatis praesentium quae quas qui quod reiciendis saepe
            voluptatum!</p>
        </div>
        <div class="image"></div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "AboutPage"
}
</script>

<style>
.header {
  position: relative;
  left: 0;
  right: 0;
  height: 98vh;
  background-color: black;

  .image-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-image: url("@/assets/pictures/paul_ricard_fly_view.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: blur(3px);
  }

  .title {
    position: absolute;
    color: white;
    font-size: 5rem;
    font-weight: bold;
    text-align: center;
    top: 50%;
    width: 100%;
  }
}

@keyframes scroll-fade {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.scroll-please {
  height: 2vh;
  background-color: yellow;
  animation: scroll-fade 3s infinite;
}

.block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  background-color: #f5f5f5;

  .title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 50px;
  }

  .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 50px;
    width: 80%;
    margin-bottom: 50px;

    &:nth-child(even) {
      flex-direction: row-reverse;
    }

    .text {
      width: 50%;

      h3 {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 20px;
      }

      p {
        font-size: 1.2rem;
        line-height: 1.5;
        text-align: justify;
      }
    }

    .image {
      width: 700px;
      background-color: black;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>