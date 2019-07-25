
class Fetch<T> {

    response:T;
    d:T[];
    constructor(private _url:string){}

    get():T[]{
        return (<T[]> d) data;
    }

    async function getEntities(){
        const data= await fetch(this._url)
        .then(res => res.json())
        .then(data => data)
        return data;
    }
}
export default Fetch;