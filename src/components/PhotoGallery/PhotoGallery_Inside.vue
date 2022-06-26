<template>
    <section>
        <div class="Photo">
            <section class="container">
                <div class="Photo__list">
                    <h2 class="gallery__title__h2">{{PhotoGallery.title}}</h2>
                    <ul class="Photo__list__menu">
                        <li><router-link to="/gallery" class="Photo__list__link">Фотогалерея</router-link></li>
                        <li><span><i class="fas fa-angle-right"></i></span></li>
                        <li><router-link to="" class="Photo__list__link">{{PhotoGallery.title}}</router-link></li>
                    </ul>

                    <div class="Photo__item">
                        <VueSlickCarousel class="Photo__mrx1" :fade="true"  ref="c1" :asNavFor="c2" :focusOnSelect="true">
                            
					            <div class="Photo__mrx1__img" v-for="child in PhotoGallery.children" :key="child.id">
                                        <img :src="child.img" :alt="child.imges + child.id">   
                                        <h2 class="Photo__mrx1__title__h2">{{PhotoGallery.title}}</h2>
					            </div>
                               
                        </VueSlickCarousel>

                       <VueSlickCarousel class="Photo__mrx2"  ref="c2" :asNavFor="c1" :focusOnSelect="true" v-bind="settings">
                           
					            <div class="Photo__mrx2__img" v-for="child in PhotoGallery.children" :key="child.id">
                                        <img :src="child.img" :alt="child.imges + child.id">
					           </div>
				            
                       </VueSlickCarousel>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>


<script>

import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import PhotoGalleryJs from "@/data/PhotoGalleryJs";
export default {
    components:{
        VueSlickCarousel,
    },

    props:['SwitchTpLinks'],

    data(){
        return{
            c1: undefined,
            c2: undefined,
            settings: {
                    arrows: false,
                    dots: false,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 7,
                    slidesToScroll: 1,
                     responsive: [
                   {
                  breakpoint: 1630,
                  settings: {
                  slidesToShow: 6,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                  }
                },
                 {
                  breakpoint: 1440,
                  settings: {
                  slidesToShow: 5,
                 slidesToScroll: 1
                  }
                 },

                 {
                  breakpoint: 1180,
                  settings: {
                  slidesToShow: 4,
                 slidesToScroll: 1
                  }
                 },

                 {
                  breakpoint: 900,
                  settings: {
                  slidesToShow: 3,
                 slidesToScroll: 1
                  }
                 },

                 {
                  breakpoint: 600,
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

    computed:{
      PhotoGallery(){
        return PhotoGalleryJs.find(BlogNews => BlogNews.id === +this.$route.params.id);
      },
    },
    
}


</script>