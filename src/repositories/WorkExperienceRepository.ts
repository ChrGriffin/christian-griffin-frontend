import Job from '@/interfaces/Job';

export default class WorkExperienceRepository {

    public get(): Promise<Job[]> {
        return new Promise((resolve, reject) => {
            resolve([
                {
                    company: 'Vehikl',
                    image: '',
                    description: '',
                },
                {
                    company: 'Arcane',
                    image: '',
                    description: '',
                },
                {
                    company: 'The Minery',
                    image: '',
                    description: '',
                }
            ]);
        });
    }
}
