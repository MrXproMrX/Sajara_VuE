<template>
    <section>
        <div class="sajara">
            <section class="container">
                <div class="sajara__list">
                    
                    <h2 class="gallery__title__h2">Цитаты</h2>
                    <Quotes :sajaras="sajaras"></Quotes>
                     
                    <h2 class="gallery__title__h2">Новости</h2>
                    <NewsBlog :NewsBlogs="NewsBlogs"></NewsBlog>
                    
                </div>
            </section>
        </div>
    </section>
</template>

<script>
import NewsBlog from '@/components/News/NewsBlog.vue';
import NewsBlogs from '@/data/NewsBlogJs';
import Quotes from '@/components/Sajara/Quotes.vue';
import QuotesJs from '@/data/QuotesJs';
export default {
    components:{
        NewsBlog,
        Quotes,
    },
    
    data(){
        return{
            page:1,
            productsPerPage:4,
            sajaras:QuotesJs
        }
    },

    computed:{

    NewsBlogs(){
       const offset = (this.page - 1) * this.productsPerPage;
       return NewsBlogs.slice(offset, offset + this.productsPerPage);
    },

    countProducts(){
       return NewsBlogs.length;
    },

   }
}
</script>