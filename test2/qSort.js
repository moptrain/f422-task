function cmp(a,b) {
    return (a<b)
}
function qsort(A,l,r,fun) {
    //快排随机化开始
    var ran=parseInt(Math.random()*1000000%(r-l))
    ran=l+ran;
    var t=A[ran];A[ran]=A[l];A[l]=t;
    //快排随机化结束
    var pivot=A[l]
    var index=l+1;
    for (var i=l+1;i<=r;i++){
        if (fun(A[i],pivot)){
            var tmp=A[i];A[i]=A[index];A[index]=tmp;
            index=index+1
        }
    }
    //swap
    var t=A[l];A[l]=A[index-1];A[index-1]=t;

    if (index-2-l+1>1) qsort(A,l,index-2,fun)
    if (r-index+1>1) qsort(A,index,r,fun)
}
T=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48,48,48]
qsort(T,0,16,cmp)
console.log(T)