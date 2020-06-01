<template>
    <section>
        <div class="container">
            <h3>It's been a privilege to work with these great companies.</h3>
            <div class="flex">
                <work-experience-item v-for="job in jobs" :job="job" />
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import WorkExperienceItem from '@/components/WorkExperienceItem.vue';
    import Job from '@/interfaces/Job';
    import WorkExperienceRepository from '@/repositories/WorkExperienceRepository';

    @Component({
        components: {WorkExperienceItem},
    })
    export default class WorkExperience extends Vue {
        public jobs: Job[] = [];

        public async mounted() {
            this.jobs = await (new WorkExperienceRepository()).get();
        }
    }
</script>

<style scoped lang="scss">
    @import './../assets/scss/variables';

    section {
        background-color: $greyBlue;
        text-align: center;
    }

    h3 {
        margin-bottom: 5rem;
    }
</style>
