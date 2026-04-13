export class Response<T>{

    constructor(
        public success: boolean,
        public message: string,
        public data: T,
        public errors: string[]
    ){}

}