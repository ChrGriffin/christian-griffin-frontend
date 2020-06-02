import Print from '@/interfaces/Print';

export default class PrintRepository {

    public get(): Promise<Print[]> {
        return new Promise((resolve, reject) => {
            resolve([
                {
                    title: 'The Outer Wilds',
                    url: 'https://www.teepublic.com/t-shirt/10682717-the-outer-wilds?store_id=91685',
                    image: 'https://res.cloudinary.com/teepublic/image/private/s--SseVmhmu--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,h_626/c_crop,g_north_west,h_626,w_470,x_-172,y_0/g_north_west,u_upload:v1462829020:production:blanks:h778z1f0n6g0xugjpxxm,x_-567,y_-325/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1590635523/production/designs/10682717_1.jpg',
                    price: 20,
                },
                {
                    title: '[Glare silently.]',
                    url: 'https://www.teepublic.com/t-shirt/7189841-glare-silently?store_id=91685',
                    image: 'https://res.cloudinary.com/teepublic/image/private/s--ZRrBQtzZ--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_-37/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-395,y_-362/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1576298287/production/designs/7189841_0.jpg',
                    price: 20,
                },
                {
                    title: 'SELECT * FROM \'fingers\' WHERE \'id\'=3',
                    url: 'https://www.teepublic.com/t-shirt/6515070-select-from-fingers-where-id-3?store_id=91685',
                    image: 'https://res.cloudinary.com/teepublic/image/private/s--2ydqvCKu--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1462829024:production:blanks:a59x1cgomgu5lprfjlmi,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1572390131/production/designs/6515070_0.jpg',
                    price: 20,
                },
                {
                    title: 'sudo rm -rf /',
                    url: 'https://www.teepublic.com/t-shirt/5010624-sudo-rm-rf-dark?store_id=91685',
                    image: 'https://res.cloudinary.com/teepublic/image/private/s--TjoNMhrc--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_-42/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-395,y_-367/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1559875782/production/designs/5010624_0.jpg',
                    price: 20,
                },
            ]);
        });
    }
}
