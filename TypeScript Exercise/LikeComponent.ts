// Facebook "Like"
export class LikeComponent{
    private _likesCount: number;
    private _isSelected: boolean;

    constructor(votes?: number, isSelected?: boolean){
        this._likesCount = votes;
        this._isSelected = isSelected;
    }

    get likesCount(){
        return this._likesCount;
    }

    get isSelected(){
        return this._isSelected;
    }    

    onClick(){
        this._likesCount += (this._isSelected) ? -1 : +1;        
        this._isSelected = !this._isSelected;                
        console.log('Votes: ' + this._likesCount + ' Toggled: ' + this._isSelected);
    }

}