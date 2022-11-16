<template>
  <v-app>
    <Menu />
    <Toolbar />
    <v-content>
      <Carousel />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '@/components/template/Footer.vue';
import Menu from '@/components/template/Menu.vue';
import Toolbar from '@/components/template/Toolbar.vue';
import Carousel from '@/components/widgets/Carousel.vue';

export default {
  components: { Footer, Carousel, Toolbar, Menu },
};
</script>
