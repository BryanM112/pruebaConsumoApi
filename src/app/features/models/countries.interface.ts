export interface countries{
    flags: flags[];
    name: name[];
    capital:String;
    maps: maps;
    population: string;
}

export interface flags{
    png:string;
    svg:string;
    alt:string;
}

export interface name{
    common: string;
    official: string;
}

export interface maps{
    googleMaps: string;
    openStreetMaps: string;
}



