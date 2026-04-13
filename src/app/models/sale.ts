export class Sale{
    
    constructor(
        public id: number,
        public date: Date,
        public total: number,
    ){}

}

export class Product{

    constructor(
        public id: number,
        public name: string,
        public unitPrice: number
    ){}

}

export class SaleDetail{

    constructor(
        public id: number,
        public quantity: number,
        public unitPrice: number,
        public product: Product,
        public parent: Sale
    ){}

}