<template>
    <section>

        <div class="video__mrx2__list">
            <div class="video__mrx2__item" v-for="(video,index) in videos" :key="index" @click="$emit('video',video.videoList)">
                <div class="video__mrx2__img" >
                  <video :src="video.videoList" muted></video>
                  <span><i class="fas fa-play"></i></span>
                </div>
                <h2 class="video__mrx2__title__h2">{{video.title}}</h2>
            </div>
        </div>

    </section>
</template>

<script>
export default {
    emits:['video'],
    props:['videos'],
}

</script>