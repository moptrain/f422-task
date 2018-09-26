


T=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
TMP=T.concat();

function msort(l,r) {
    console.log(l,r)
    if (l==r){
        TMP[l]=T[l];
        return;
    }
    var mid=parseInt((l+r)/2);
    msort(l,mid);
    msort(mid+1,r);
    var i;
    for (i=1;i<=mid;i++)
        TMP[i]=T[i]
    var k=r;
    for (i=mid+1;i<=r;i++){
        TMP[i]=T[k];
        k--;
    }
    var ll=l,rr=r;
    var kk
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