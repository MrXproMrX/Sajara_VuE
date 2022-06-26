<template>
    <section>
        <div class="gallery">
            <section class="container">
                 <div class="gallery__list">
                     <h2 class="gallery__title__h2">Фотогалерея</h2>

                     <PhotoImgeGallery :PhotoGallerys="PhotoGallerys"></PhotoImgeGallery>
                 </div>
            </section>
        </div>
    </section>
</template>

<script>
import PhotoGalleryJs from '@/data/PhotoGalleryJs';
import PhotoImgeGallery from '@/components/PhotoGallery/PhotoImgeGallery.vue';
export default {
    components:{
        PhotoImgeGallery
    },

    data(){
        return{
            PhotoGallerys:PhotoGalleryJs
        }
    }
}
</script>