<template>
    <section>
        <div class="video">
            <section class="container">
                <div class="video__list">
                    <h2 class="gallery__title__h2">Видеогалерея</h2>


                    <section class="video__mrx1">
                        <div class="video__mrx1__video">
                           <video  :src="videoListMrx" controls muted ></video>
                        </div>
                    </section>

                    <VideoGalleryMenu :videos="videos" @video="video"></VideoGalleryMenu>
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
             videos:VideoList,
             videoListMrx:VideoList[0].videoList,
        }
    },

    methods:{
        video(videoList){
          this.videoListMrx = videoList
        },
    },
}
</script>