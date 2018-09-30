function cmp(a,b) {
    return (a<b)
}
var qsort=function (A,l,r,fun) {
    //快排随机化开始
    let ran=parseInt(Math.random()*1000000%(r-l));
    ran=l+ran;
    let t=A[ran];A[ran]=A[l];A[l]=t;
    //快排随机化结束
    var pivot=A[l];
    var index=l+1;
    for (let i=l+1;i<=r;i++){
        if (fun(A[i],pivot)){
            let tmp=A[i];A[i]=A[index];A[index]=tmp;
            index=index+1
        }
    }
    //swap
    t=A[l];A[l]=A[index-1];A[index-1]=t;

    if (index-2-l+1>1) qsort(A,l,index-2,fun);
    if (r-index+1>1) qsort(A,index,r,fun);
};
let test_case=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48,48,48];
qsort(test_case,0,16,cmp);
console.log(test_case);