export class LikeComponent{
    constructor(private _likeCount: number, private _isSelected: boolean){
    }
    get likeCount(){
        return this._likeCount;
    }

    set likeCount(likeCount: number){
        this._likeCount = likeCount;
    }

    get isSelected(){
        return this._isSelected;
    }

    onClick = ()=>{
        if(this._isSelected){
            this.likeCount++;
        } else{
            this._likeCount--;
        }
        this._isSelected = !this._isSelected;
    }
}