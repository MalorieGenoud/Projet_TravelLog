export class TripResponse {
    type: string;
    value: TripResponseValue;
}

export class TripResponseValue {
    title: string;
    description: string;
    id: string;
    href: string;
    placesCount: number;
    userId: string;
    userHref: string;
    createdAt: string;
    updatedAt: string;
}