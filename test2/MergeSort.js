


let T=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
let TMP=T.concat();

function msort(l,r) {
    if (l===r){
        TMP[l]=T[l];
        return;
    }
    var mid=parseInt((l+r)/2);
    msort(l,mid);
    msort(mid+1,r);
    for (let i=1;i<=mid;i++)
        TMP[i]=T[i];
    let k=r;
    for (i=mid+1;i<=r;i++){
        TMP[i]=T[k];
        k--;
    }
    //下面正式开始归并
    let ll=l,rr=r;
    let kk;
    for (kk=l;kk<=r;kk++){
        if (TMP[ll]<TMP[rr]){
            T[kk]=TMP[ll];
            ll++;
        }
        else{
            T[kk]=TMP[rr];
            rr--;
        }
    }
}
msort(0,14);
console.log(T);