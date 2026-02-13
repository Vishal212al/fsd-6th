import os from 'os';

const getOSArch = () => {
    try{
        const arch = os.arch();
        console.log(arch);
        const tutalMem = os.totalmem();
        console.log(tutalMem/1024*1024);
        const freeMem = os.freemem();
        console.log(freeMem/1024*1024);
    }catch(error) {
        console.log("unable to get os arch");
    }
}
getOSDetails();