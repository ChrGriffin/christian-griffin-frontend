<template>
    <section class="flex">
        <div class="api-indicator">
            <a target="_blank" href="https://bitbucket.org/ChrGriffin/christian-griffin-app/src/master/Modules/ChristianGriffin/Services/Instagram/InstagramApi.php">
                Retrieved from <span class="fa fa-instagram"></span>
            </a>
        </div>

        <a v-for="post in instagramPosts"
           target="_blank"
           class="instagram-post"
           :href="post.url"
           :style="{ backgroundImage: `url(${post.image})` }"></a>
    </section>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import InstagramPostRepository from '@/repositories/InstagramPostRepository';
    import InstagramPost from '@/interfaces/InstagramPost';

    @Component
    export default class InstagramPosts extends Vue {
        @Prop({
            default: () => {
                return new InstagramPostRepository();
            },
        }) public instagramPostRepository!: InstagramPostRepository;

        public instagramPosts: InstagramPost[] = [];

        public async mounted() {
            this.instagramPosts = await this.instagramPostRepository.get();
        }
    }
</script>

<style scoped lang="scss">
    @import './../assets/scss/variables';

    section {
        padding: 0;
        margin-bottom: -2px;
    }

    a.instagram-post {
        border-bottom: 0;
        flex: 1;
        display: none;
        overflow: hidden;
        padding-top: 12rem;
        background-size: cover;
        background-position: center;

        &:hover {
            border-bottom: 0;
        }
    }

    .api-indicator a {
        opacity: 1;
        text-shadow: 1px 1px 5px $black;
    }

    img {
        width: 100%;
    }

    @media screen and (min-width: 768px) and (max-width: 1199px) {
        a.instagram-post {
            display: inline-block;

            &:nth-child(n+6) {
                display: none;
            }
        }
    }

    @media screen and (min-width: 1200px) and (max-width: 1440px) {
        a.instagram-post {
            display: inline-block;
            padding-top: 14rem;

            &:nth-child(n+8) {
                display: none;
            }
        }
    }

    @media screen and (min-width: 1441px) and (max-width: 1920px) {
        a.instagram-post {
            display: inline-block;
            padding-top: 16rem;

            &:nth-child(n+8) {
                display: none;
            }
        }
    }

    @media screen and (min-width: 1921px) and (max-width: 2220px) {
        a.instagram-post {
            display: inline-block;
            padding-top: 14rem;

            &:nth-child(n+11) {
                display: none;
            }
        }
    }

    @media screen and (min-width: 2221px) and (max-width: 3100px) {
        a.instagram-post {
            display: inline-block;
            padding-top: 14rem;

            &:nth-child(n+14) {
                display: none;
            }
        }
    }

    @media screen and (min-width: 3101px) {
        a.instagram-post {
            display: inline-block;
            padding-top: 14rem;
        }
    }
</style>
