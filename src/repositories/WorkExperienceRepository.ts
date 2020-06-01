import Job from '@/interfaces/Job';

export default class WorkExperienceRepository {

    public get(): Promise<Job[]> {
        return new Promise((resolve, reject) => {
            resolve([
                {
                    company: 'Vehikl',
                    url: 'https://vehikl.com/',
                    description: 'Working primarily with Vue, Laravel, and homespun PHP, I\'m building resilient, test-driven web applications for a variety of clients.',
                    from: new Date('2018-10-01 00:00:00'),
                    to: null,
                },
                {
                    company: 'Arcane',
                    url: 'https://thearcane.com/',
                    description: 'Working primarily with the PHP frameworks Laravel and Lumen, I built a wide variety of web applications, from complex E-Commerce builds, to API backends for front-end applications, to experimental R&D projects focused on transforming web marketing, for clients such as Zucora and MaxLiving.',
                    from: new Date('2018-01-01 00:00:00'),
                    to: new Date('2018-08-01 00:00:00'),
                },
                {
                    company: 'The Minery',
                    url: 'https://theminery.com/',
                    description: 'Working for such clients as Acura and Honda, I built highly complex and robust web application platforms using HTML5, CSS3, JavaScript, jQuery (with heavy use of Ajax), and PHP on the Yii 1.1 and Yii 2 platforms. Additional work included \'freeform\' PHP, WordPress, and Drupal.',
                    from: new Date('2016-11-01 00:00:00'),
                    to: new Date('2017-12-01 00:00:00'),
                },
            ]);
        });
    }
}
