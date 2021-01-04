

class datamgr {
    constructor() {
        let _id;
        let _qtr;
        let _year;
        let _qtrDeductions = new Map();
        let _hosDeduction; // yearly home office space deduction
        let _estimate; //estimated taxes for the selected quarter

        //getters
        this.getId = () => { return _id; }
        this.getQtr = () => { return _qtr; }
        this.getYear = () => { return _year; };
        this.getQtrDeductions = () => { return _qtrDeductions; }
        this.getHosDeduction = () => { return _hosDeduction; }
        this.getEstimate = () => { return _estimate; }

        //setters
        this.setId = () => {
            const sqtr = new String(_qtr);
            const syear = new String(_year);
            _id = window.btoa(syear + sqtr)
                .concat(syear + "_" + sqtr);
            return this;
        }
        this.setQtrDeductions = () => {
            _qtrDeductions = new Map();
            //TODO
            return this;
        }
        this.setHosDeduction = () => {
            _hosDeduction = null;
            //TODO
            return this;
        }
        this.setEstimate = () => {
            _estimate = null;
            //TODO
            return this;
        }
        this.setQtr = (qtr) => {
            _qtr = qtr;
            return this;
        }
        this.setYear = (yr) => {
            _year = yr;
            return this;
        }
    }
}