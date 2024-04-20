import moment from "moment";

export const helperUtility = {
    getGUID(){
        let d = new Date().getTime();
        if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
            d += performance.now(); //use high-precision timer if available
        }
        const newGuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        
        return newGuid;
    },
    getDateTimeFormat(){
        return 'YYYY-MM-DD HH:mm:ss';
    },
    getDateFormat(){
        return "yyyy-MM-dd";
    },
    getCurrentDateTime(){
        return moment().format('YYYY-MM-DD HH:mm:ss');
    },
    getCurrentDate(){
        return moment().format("YYYY-MM-DD");
    }
}