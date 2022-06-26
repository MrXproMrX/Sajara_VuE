<template>
    <section>
        <div class="news_in">
            <section class="container">
               <div class="news_in__list clearfix">
                   <div class="news_in__item">
                       <div class="news_in__img">
                           <img :src="NewsBlog.img" :alt="NewsBlog.title">
                       </div>
                   </div>

                   <div>
                       <h2 class="news_in__title__h2">{{NewsBlog.title}}</h2>
                       <h4 class="news_in__title__h4">{{NewsBlog.data}}</h4>
                       <div class="news_in__text">
                           <p>{{NewsBlog.text}}</p>
                       </div>
                   </div>
               </div>
            </section>
        </div>
    </section>
</template>

<script>
import NewsBlogJs from '@/data/NewsBlogJs'
export default {
    computed:{
      NewsBlog(){
        return NewsBlogJs.find(BlogNews => BlogNews.id === +this.$route.params.id);
      },
    }
}
</script>