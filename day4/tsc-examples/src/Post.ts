class Post {

    private comments: string[];

    constructor(private _title:string, private _authorName:string, private _noOfLikes:number = 0){

    }

    get title():string{
        return this._title;
    }

    get authorName():string{
        return this._authorName;
    }

    like = ()=>{
        this._noOfLikes++;
    }

    unlike = ()=> {
        this._noOfLikes --;
    }

    get noOfLikes():number{
        return this._noOfLikes;
    }
}


export default Post;

export function namedExport (arg:string){
    console.log(`${arg} is exported`)
}

