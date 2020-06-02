import Print from '@/interfaces/Print';

export default class PrintRepository {

    public get(): Promise<Print[]> {
        return new Promise((resolve, reject) => {
            resolve([
            ]);
        });
    }
}
