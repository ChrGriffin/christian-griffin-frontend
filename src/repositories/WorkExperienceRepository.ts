import Job from '@/interfaces/Job';

export default class WorkExperienceRepository {

    public get(): Promise<Job[]> {
        return new Promise((resolve, reject) => {
            resolve([
                {
                    company: 'Vehikl',
                    image: require('@/assets/images/vehikl_logo.jpg'),
                    description: '',
                },
                {
                    company: 'Arcane',
                    image: require('@/assets/images/arcane_logo.jpg'),
                    description: '',
                },
                {
                    company: 'The Minery',
                    image: require('@/assets/images/minery_logo.jpg'),
                    description: '',
                },
            ]);
        });
    }
}
