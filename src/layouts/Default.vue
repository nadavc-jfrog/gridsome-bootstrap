<template>
  <div class="layout">
    <Hero />
    <div id="content-wrapper" class="bi-content">
      
      <slot/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '../components/Footer'
import Hero from '../components/page/Hero'
import Header from '../components/Header'

export default {
  components: {
    Footer,
    Header,
    Hero
  },
}
</script>


<style lang="scss">
@import '../assets/styles/main';
body, html {
  height: 100%;
}

body {
  font-family: 'Lucida Grande', sans-serif !important;
  margin:0;
  padding:0;
  line-height: 1.5;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
#content-wrapper {
  h2 {
    padding-top: 40px;
    padding-bottom: 20px;
    margin: 0;
    margin-bottom: 0;
    font-weight: bold;
    font-size: 38px;
    line-height: 1.2;
    color: $title-color;
  }
  img {
    margin-bottom: 40px;
  }

  .youtube-iframe-wrapper {
    width: 100%;
    aspect-ratio: 1.61;
    iframe {
      width: 100%;
      height: 100%;
    }
  }
}

@include media-breakpoint-up(md) {
  h2 {
    padding-top: 80px;
    padding-bottom: 30px;
  }
}


</style>
