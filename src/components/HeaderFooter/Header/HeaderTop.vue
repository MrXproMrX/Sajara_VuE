<template>
    <section>
        <header>
            <div class="header">
                <section class="container">
                    <div class="header__list">
                        <div class="header__item">
                            <div class="header__logo">
                                <router-link to="/"><img src="@/assets/foto/logo.svg" alt="logo"></router-link>
                            </div>
                            
                            <div>
                                <HeaderMenu class="header__burger__none"  v-bind:class="{ header__burger__block: burger}" :HeaderMenus="HeaderMenus"></HeaderMenu>
                            </div>
                        </div>

                        <div class="header__item">
                             <div>
                                <form action="#!" class="header__form">
                                   <input class="header__form__input" type="text" placeholder="Qildirmoq">
                                   <button class="header__form__button" type="submit"><i class="fas fa-search"></i></button>
                                </form>
                             </div>

                             <div>
                                 <ul class="header__uz__menu">
                                     <li>
                                         <a href="#!" class="header__uz__menu__link">UZ <span><i class="fas fa-angle-down"></i></span></a>

                                         <ul class="header__ru__none">
                                             <li><a href="#!" class="header__uz__menu__link">RU</a></li>
                                             <li> <a href="#!" class="header__uz__menu__link">EN</a></li>
                                         </ul>
                                     </li>
                                 </ul>
                             </div>

                             
                             <div class="header__burger">
                                 <div class="header__burger__start" v-if="burger===false"  @click.prevent="burger=!burger"><i class="fas fa-bars"></i></div>
                                 <div class="header__burger__start" v-if="burger===true"  @click.prevent="burger=!burger"><i class="fas fa-times"></i></div>
                             </div>
                        </div>
                    </div>
                </section>
            </div>
        </header>
    </section>
</template>


<script>
import HeaderMenu from '@/components/HeaderFooter/Header/HeaderMenu.vue';
import HeaderLink from '@/data/HeaderLink';

export default {
    components:{
        HeaderMenu,
    },

    data(){
        return{
            HeaderMenus:HeaderLink,
            burger:false,
        }
    }
}
</script>