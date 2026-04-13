export class Kpi{

    constructor(
        public title: string,
        public amount: number | string,
        public performance: number,
        public isMoney: boolean
    ){}

}