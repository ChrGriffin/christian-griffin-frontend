<template>
    <section>
        <div class="container">
            <h3>It's been a privilege to work with these great companies.</h3>
            <div class="flex work-experience" v-match-heights="{ el: ['.work-experience .box'] }">
                <work-experience-item v-for="job in jobs" :job="job" :key="job.company" />
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import WorkExperienceItem from '@/components/WorkExperienceItem.vue';
    import Job from '@/interfaces/Job';
    import WorkExperienceRepository from '@/repositories/WorkExperienceRepository';

    @Component({
        components: {WorkExperienceItem},
    })
    export default class WorkExperience extends Vue {

        @Prop({
            default: () => {
                return new WorkExperienceRepository();
            },
        }) public workExperienceRepository!: WorkExperienceRepository;

        public jobs: Job[] = [];

        public async mounted() {
            this.jobs = await this.workExperienceRepository.get();
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
        margin-bottom: 6rem;
    }
</style>
