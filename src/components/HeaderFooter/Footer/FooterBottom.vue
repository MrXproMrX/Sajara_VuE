<template>
    <section>
       <footer>
           <div class="footer">
               <section class="container">
                   <div class="footer__list">
                       <div class="footer__item">
                           <div>
                               <h2 class="footer__title__h2">СAНA СAЖAРA</h2>
                               <div class="footer__text">
                                   <p>
                                       Мир не лучше и не хуже он такой, как видишь ты, кто-то видит только лужи, кто-то звёздные миры...
                                   </p>
                               </div>
                           </div>

                           <div>
                               <FooterMenu :footerMenus="footerMenus"></FooterMenu>
                           </div>
                       </div>

                       <div>
                           <ul class="footer__address">
                               <li><a href="tel:+ 998 99 730 01 79" class="footer__address__link"><span><i class="fas fa-phone-alt"></i></span> + 998 99 730 01 79</a></li>
                               <li>
                                   <a  class="footer__address__link"><span><i class="fas fa-map-marker-alt"></i></span> Узбекистан, г. Ташкент Ул. Садыка Азимова, 68</a>
                                </li>
                               <li><a href="mailto:mrxpro2003@gmail.com" class="footer__address__link"><span><i class="fas fa-envelope"></i></span> mrxpro2003@gmail.com</a></li>
                           </ul>
                       </div>
                   </div>
               </section>
           </div>

           <div class="footer__bottom">
               <section class="container">
                   <div class="footer__bottom__list">
                       <a href="#!" class="footer__bottom__link">Ismailov Marat</a>
                   </div>
               </section>
           </div>
       </footer>
    </section>
</template>


<script>
import FooterMenu from '@/components/HeaderFooter/Footer/FooterMenu.vue';
import HeaderLink from '@/data/HeaderLink';

export default {
    components:{
        FooterMenu,
    },

    data(){
        return{
            footerMenus:HeaderLink,
        }
    }
}
</script>