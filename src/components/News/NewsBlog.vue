<template>
    <section class="news__lest__top">
        <div class="news__item" v-for="(NewsBlog,index) in NewsBlogs" :key="index">
            <router-link :to="NewsBlog.link + NewsBlog.id">
                <div class="news__list__img">
                    <img :src="NewsBlog.img" :alt="NewsBlog.title">
                </div>

                <h2 class="news__list__title__h2">{{NewsBlog.title}}</h2>
                <h4 class="news__list__title__h4">{{NewsBlog.data}}</h4>

                <div class="news__list__text">
                    <p>{{NewsBlog.text}}</p>
                </div>
            </router-link>
        </div>
    </section>
</template>

<script>
export default {
    props:['NewsBlogs']
}
</script>