import {VacancyInterface, ApplicantDataInterface,vacancyList, ApplicantList} from "./interface";

    export class Vacancies {

        setVacancyData(data:VacancyInterface):void {
            vacancyList.push(data);
        }


        removeVacancy(vid:number){
            for (var item of vacancyList){
                if(vid==item.vid){
                    var index=vacancyList.indexOf(item);
                    vacancyList.splice(index,1);
                }
            }
        }
    }

    export class ApplicantData {
        
        setApplicantData(data:ApplicantDataInterface):void{
            for(var item of vacancyList){
                if(data.vid==item.vid){
                    if(item.status==true && data.Result!=null){
                        ApplicantList.push(data);
                    }else {
                        console.log("Interview completed please enter the result of applicant");
                    }
                    if(item.status==false && data.Result==null){
                        ApplicantList.push(data);
                    }else{
                        console.log("interview not completed please do not enter the result of applicant");
                    }
                    
                }else{
                    console.log(`No vacancy for  ${data.vid}`);
                }
            }   
        }

        ShowApplicants(){
            for(var item of ApplicantList){
                console.log(item);
            }
        }
        
    }

    export class Hiring{
        scheduleInterview():void{
            for(var item of vacancyList){
                if(item.status==false){
                    console.log(`Interview for ${item.post} On ${item.date}`);
                }
            }
        }

        storingResult():({ID:number,Name:string,Result:number})[]{
            var ApplicantResult:({ID:number,Name:string,Result:number})[]=[];

            for(var item of ApplicantList){
                if(item.Result!=null){
                    ApplicantResult.push({ID:item.vid,Name:item.Name,Result:item.Result});
                }
            }
            
            return ApplicantResult;
        }

        HiringApplicant():void{
            console.log("List of Hired Applicant")
            for(var item of ApplicantList){
                if(item.Result!=null && item.Result>60){
                    console.log(`${item.Name}\t${item.Result}`);
                }
            }
        }

        Report():void{
            for(var item of vacancyList){
                if(item.status==true){
                    console.log(`For post of ${item.post}`)
                    for(var a of ApplicantList){
                        if(a.vid==item.vid){
                             if(a.Result>60){
                                console.log(`${a.ApplicantID}  ${a.Name}  ${a.Result}  Selected`);
                             }else{
                                console.log(`${a.ApplicantID}  ${a.Name}  ${a.Result}  Not Selected`);
                             }
                        }
                    }
                }else{
                    console.log(`Interview::-- ${item.post} -- ${item.date}`);
                }
            }
        }
    }