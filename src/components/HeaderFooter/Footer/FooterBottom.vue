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
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                   </p>
                               </div>
                           </div>

                           <div>
                               <FooterMenu :footerMenus="footerMenus"></FooterMenu>
                           </div>
                       </div>

                       <div>
                           <ul class="footer__address">
                               <li><a href="tel:+ 998 90 505 45 05" class="footer__address__link"><span><i class="fas fa-phone-alt"></i></span> + 998 90 505 45 05</a></li>
                               <li>
                                   <a  class="footer__address__link"><span><i class="fas fa-map-marker-alt"></i></span> Узбекистан, г. Ташкент Ул. Садыка Азимова, 68</a>
                                </li>
                               <li><a href="mailto:info@sos.uz" class="footer__address__link"><span><i class="fas fa-envelope"></i></span> info@sos.uz</a></li>
                           </ul>
                       </div>
                   </div>
               </section>
           </div>

           <div class="footer__bottom">
               <section class="container">
                   <div class="footer__bottom__list">
                       <a href="#!" class="footer__bottom__link">Created by SOS</a>
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