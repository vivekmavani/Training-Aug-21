export interface VacancyInterface{
    vid: number;
    date : Date;
    post: string;
    TotalSeat:number;
    Salary:number;
    venue:string;
    status:boolean;
}

export interface ApplicantDataInterface{
    ApplicantID: number;
    Name:string;
    Age:number;
    Address:string;
    vid:number;
    Result?:number;
}

export var vacancyList:VacancyInterface[] = [
    {
        vid:1,
        date:new Date(21-11-2021),
        post:"Android Developer", 
        venue:"Ahmedabad",
        TotalSeat:7,
        Salary:30000,
        status:true
    },
    {
        vid:2,
        date:new Date(12-11-2021),
        post:"Flutter Developer",
        venue:"Ahmedabad",
        TotalSeat:7,
        Salary:30000,
        status:false
    }
]

export var ApplicantList:ApplicantDataInterface[] = [
    {
        ApplicantID:1,
        Name:"Vivek",
        Age:22,
        Address:"Ahmedabad",
        vid:2
    },
    {
        ApplicantID:2,
        Name:"Magan",
        Age:23,
        Address:"Ahmedabad",
        vid:1,
        Result:60
    },
    {
        ApplicantID:3,
        Name:"Arjun",
        Age:22,
        Address:"Ahmedabad",
        vid:2
    },
    {
        ApplicantID:4,
        Name:"Anuj",
        Age:22,
        Address:"Ahmedabad",
        vid:1,
        Result:50
    }
]
        