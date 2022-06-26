<template>
    <section>
  
       <VueVideoSlickCarousel class="video__mrx1" :fade="false" :arrows="false"  ref="c1" :asNavFor="c2" :focusOnSelect="true">
            <div class="video__mrx1__video"  v-for="(video,index) in videos" :key="index">
              <video :src="video.videoList" controls muted ></video>
            </div>
        </VueVideoSlickCarousel>

        <VueVideoSlickCarousel class="video__mrx2" ref="c2" :asNavFor="c1" :focusOnSelect="true" v-bind="settings">
            <div class="video__mrx2__item" v-for="(video,index) in videos" :key="index">
                <div class="video__mrx2__img">
                  <video :src="video.videoList" muted></video>
                  <span><i class="fas fa-play"></i></span>
                </div>
                <h2 class="video__mrx2__title__h2">{{video.title}}</h2>
            </div>
         </VueVideoSlickCarousel>

    </section>
</template>

<script>

import VueVideoSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
export default {
    props:['videos'],
    components:{
        VueVideoSlickCarousel,
    },
    data(){
        return{
            c1: undefined,
            c2: undefined,
            settings: {
                    arrows: false,
                    dots: false,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                     responsive: [
                   {
                  breakpoint: 1000,
                  settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                  }
                },
                 {
                  breakpoint: 700,
                  settings: {
                  slidesToShow: 2,
                 slidesToScroll: 1
                  }
                 },
               ]
               },
        }
    },
    mounted() {
        this.c1 = this.$refs.c1;
        this.c2 = this.$refs.c2;
    },
}

</script>