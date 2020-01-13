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
    tripId: string;
    tripHref: string;
    createdAt: string;
    updatedAt: string;
}
