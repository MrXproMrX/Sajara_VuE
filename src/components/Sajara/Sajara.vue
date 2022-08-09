<template>
    <section>
        <div class="sajara">
            <section class="container">
                <div class="sajara__list">
                     
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
export default {
    components:{
        NewsBlog,
    },
    
    data(){
        return{
            page:1,
            productsPerPage:4,
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