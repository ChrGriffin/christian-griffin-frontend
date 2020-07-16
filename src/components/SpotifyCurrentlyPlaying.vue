<template>
    <section v-if="currentlyPlaying !== null">
        <div class="api-indicator">
            <a target="_blank" href="https://gist.github.com/ChrGriffin/0250fd6d1301b2705a2159f50b34b815">
                Live from <span class="fa fa-spotify"></span>
            </a>
        </div>

        <div class="container flex">
            <div>
                <h3>What I'm listening to.</h3>
            </div>

            <div class="flex">
                <img :src="currentlyPlaying.image" :alt="`${currentlyPlaying.name} cover art`" />
                <div class="details">
                    <h4>{{ currentlyPlaying.name }}</h4>
                    <h5 class="artist">{{ currentlyPlaying.artist }}</h5>
                    <h5 class="album">{{ currentlyPlaying.album }}</h5>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import SpotifyCurrentlyPlayingRepository from '@/repositories/SpotifyCurrentlyPlayingRepository';
    import CurrentlyPlaying from '@/interfaces/CurrentlyPlaying';

    @Component
    export default class SpotifyCurrentlyPlaying extends Vue {
        @Prop({
            default: () => {
                return new SpotifyCurrentlyPlayingRepository();
            },
        }) public currentlyPlayingRepository!: SpotifyCurrentlyPlayingRepository;

        public currentlyPlaying: null|CurrentlyPlaying = null;

        public mounted() {
            this.getCurrentlyPlaying();
        }

        public async getCurrentlyPlaying() {
            try {
                this.currentlyPlaying = await this.currentlyPlayingRepository.get();
            } catch (error) { /* do nothing */ }

            setTimeout(() => {
                this.getCurrentlyPlaying();
            }, 20000);
        }
    }
</script>

<style scoped lang="scss">
    @import './../assets/scss/variables';

    section {
        background-color: $black;
        padding-top: 2rem;
        padding-bottom: 2rem;
        position: relative;
    }

    .container {
        align-items: center;
        justify-content: center;

        h3 {
            margin-bottom: 0;
            margin-right: 4rem;
        }

        > div.flex {
            align-items: center;

            img {
                height: 80px;
            }

            .details {
                margin-left: 1rem;

                h4 {
                    margin-bottom: 0.75rem;
                }

                h5 {
                    margin-bottom: 0.5rem;

                    &:last-child {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
</style>
