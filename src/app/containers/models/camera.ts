interface ICamera {
    imageUrl: string;
    indicator: boolean;
}

interface ICamerasResponse {
    camerasCount: number;
    cameras: ICamera[];
}
