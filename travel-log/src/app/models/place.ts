export class Place {
    id: number;
    href: string;
    name: string;
    description: string;
    location: {
        coordinates: number[];
        type: string;
    };
    pictureUrl: string;
    placeId: string;
    placeHref: string;
    createdAt: string;
    updatedAt: string;
}
