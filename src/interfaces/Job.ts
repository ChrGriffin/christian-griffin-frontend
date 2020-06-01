export default interface Job {
    company: string;
    url: string;
    description: string;
    from: Date;
    to: Date|null;
}
