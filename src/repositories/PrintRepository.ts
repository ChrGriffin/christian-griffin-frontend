import Print from '@/interfaces/Print';

export default class PrintRepository {

    public get(): Promise<Print[]> {
        return new Promise((resolve, reject) => {
            resolve([
                {
                    title: 'The Outer Wilds',
                    url: 'https://www.teepublic.com/t-shirt/10682717-the-outer-wilds?store_id=91685',
                    image: 'https://res.cloudinary.com/teepublic/image/private/s---ltaLt_9--/t_Preview/b_rgb:262c3a,c_limit,f_jpg,h_630,q_90,w_630/v1590635523/production/designs/10682717_1.jpg',
                },
                {
                    title: 'Everyone disliked that.',
                    url: 'https://www.teepublic.com/t-shirt/11870109-everyone-disliked-that?store_id=91685',
                    image: 'https://res.cloudinary.com/teepublic/image/private/s--lmoGyrw7--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1593702891/production/designs/11870109_0.jpg',
                },
                {
                    title: '\'fingers\'',
                    url: 'https://www.teepublic.com/t-shirt/6515070-select-from-fingers-where-id-3?store_id=91685',
                    image: 'https://res.cloudinary.com/teepublic/image/private/s---mqPv8HX--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1572390131/production/designs/6515070_0.jpg',
                },
                {
                    title: 'sudo rm -rf /',
                    url: 'https://www.teepublic.com/t-shirt/5010624-sudo-rm-rf-dark?store_id=91685',
                    image: 'https://res.cloudinary.com/teepublic/image/private/s--d-btcWG3--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1559875782/production/designs/5010624_0.jpg',
                },
            ]);
        });
    }
}
