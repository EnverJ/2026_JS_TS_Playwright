// 100% abstraction

interface USMedical{
    physio():void;
    cardio():void;
    emergency():void;
}
interface UkMedical{
    eNT():void;
    onCology():void;
     emergency():void;
}
interface IndiaMedical{
    pediatric():void;
    dental():void;
    gastro():void;
     emergency():void;
}

class FortisHospital implements USMedical, UkMedical, IndiaMedical {
    emergency(): void {
        console.log("FH - Emergency services available 24/7");
    }
    gastro(): void {
        console.log("FH - Gastro");
    }
    pediatric(): void {
        console.log("FH - Pediatric");
    }
    dental(): void {
          console.log("FH - dental");
    }
    eNT(): void {
          console.log("FH - eNT");
    }
    onCology(): void {
         console.log("FH - onCology");
    }
    physio(): void {
          console.log("FH - physio");
    }
    cardio(): void {
          console.log("FH - cardio");
    }
    

    // individual methods:
    medicalTest():void{
        console.log("FH -- Medical");
    }
    
}

let fh = new FortisHospital();
fh.cardio();
fh.dental();
fh.gastro();
fh.onCology();
fh.eNT();
fh.emergency();
fh.medicalTest();


console.log("====top casting =====");
// TOP CASTING: child class object can be referred by paren interface ref variable;
let us: USMedical =new FortisHospital();
us.cardio();
us.emergency();
us.physio();

let uk: UkMedical = new FortisHospital();
uk.eNT();
uk.emergency();
uk.onCology();