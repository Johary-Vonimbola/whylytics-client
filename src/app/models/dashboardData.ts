type KpiData = {
    amount: number,
    percent: number
};

export class DashboardData{

    constructor(
        public totalSale: KpiData,
        public saleCount: KpiData,
        public topProduct: string,
        public graphData: number[]
    ){}

}