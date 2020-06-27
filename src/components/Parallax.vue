<template>
    <div class="parallax-container" :style="{transform: `translate3d(0, ${offset}px, 0)`}">
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class Parallax extends Vue {
        public height: number = 0;
        public scrollFactor: number = 0;

        get offset(): number {
            return this.height * this.scrollFactor * 0.5;
        }

        public mounted(): void {
            this.calcParallax();

            const eventHandler = () => requestAnimationFrame(this.calcParallax);
            window.addEventListener('resize', eventHandler);
            window.addEventListener('scroll', eventHandler);

            this.$on(`hook:destroyed`, () => {
                window.removeEventListener('resize', eventHandler);
                window.removeEventListener('scroll', eventHandler);
            });
        }

        public calcParallax(): void {
            const containerRect = this.$el.getBoundingClientRect();

            this.height = containerRect.height;
            const viewportOffsetTop = containerRect.top;
            const viewportOffsetBottom = window.innerHeight - viewportOffsetTop;

            this.scrollFactor = viewportOffsetBottom / (window.innerHeight + this.height);
        }
    }
</script>
