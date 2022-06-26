import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexView from '@/views/IndexView'
import SajaraView from '@/views/SajaraView'
import NewsView from '@/views/NewsView'
import NewsInsideView from '@/views/NewsInsideView'
import PhotoGalleryView from '@/views/PhotoGalleryView'
import PhotoGallery_InsideView from '@/views/PhotoGallery_InsideView'
import VideoGalleryView from '@/views/VideoGalleryView'
import СontactsView from '@/views/СontactsView'
import Look404View from '@/views/Look404View'
import Sajara_InView from '@/views/Sajara_InView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: IndexView
  },

  {
    path: '/sajara',
    name: 'sajara',
    component: SajaraView
  },

  {
    path: '/news',
    name: 'news',
    component: NewsView
  },

  {
    path: '/News_Inside/:id',
    name: 'News_Inside',
    component: NewsInsideView
  },

  {
    path: '/gallery',
    name: 'Gallery',
    component: PhotoGalleryView
  },
  
  {
    path: '/galleryInside/:id',
    name: 'galleryInside',
    component: PhotoGallery_InsideView
  },

  {
    path: '/VideoGallery',
    name: 'Video_Gallery',
    component: VideoGalleryView
  },

  {
    path: '/contacts',
    name: 'contacts',
    component: СontactsView
  },

  {
    path: '*',
    name: 'Look404',
    component: Look404View
  },

  {
    path: '/Sajara_In',
    name: 'Sajara_In',
    component: Sajara_InView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router