<template>
    <section>
        <div class="video">
            <section class="container">
                <div class="video__list">
                    <h2 class="gallery__title__h2">Видеогалерея</h2>
                    <VideoGalleryMenu :videos="videos"></VideoGalleryMenu>
                </div>
            </section>
        </div>
    </section>
</template>

<script>
import VideoList from '@/data/VideoList';
import VideoGalleryMenu from '@/components/VideoGallery/VideoGalleryMenu.vue'
export default {
    components:{
        VideoGalleryMenu,
    },

    data(){
        return{
             videos:VideoList
        }
    }
}
</script>