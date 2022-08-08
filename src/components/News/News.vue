<template>
    <section>
         <div class="news">
             <section class="container">
                  <div class="news__list">
                      <NewsBlog :NewsBlogs="NewsBlogs"></NewsBlog>
                      <NewsPage v-model="page" :count="countProducts" :per-page="productsPerPage"></NewsPage>
                  </div>
             </section>
         </div>
    </section>
</template>

<script>
import NewsBlog from '@/components/News/NewsBlog.vue';
import NewsBlogs from '@/data/NewsBlogJs';
import NewsPage from '@/components/News/NewsPage.vue'
export default {
    components:{
        NewsBlog,
        NewsPage,
    },

    data(){
        return{
            page:1,
            productsPerPage:8,
        }
    },

    computed:{
    NewsBlogs(){
       const offset = (this.page - 1) * this.productsPerPage;
       return NewsBlogs.slice(offset, offset + this.productsPerPage);
    },
    countProducts(){
       return NewsBlogs.length;
    }
   }
}
</script>