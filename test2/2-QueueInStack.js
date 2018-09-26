class QueueInStack{
    constructor(){
        this.S1=[]
        this.S2=[]
    }
    push(x){
        if (this.S1.length==0 &&this.S2.length==0){
            this.S1.push(x)
        }
        else if (this.S1.length>0){
            this.S1.push(x)
        }
        else {
            while (this.S2.length>0)
                this.S1.push(this.S2.pop())
            this.S1.push(x)
        }
        return '新的长度是'+this.lenth
    }
    front(){
        if (this.S1.length>0){
            while (this.S1.length>0)
                this.S2.push(this.S1.pop())
            return this.S2.pop()
        }
        else if (this.S2.length>0){
            return this.S2.pop()
        }
        else
            return null
    }
    get lenth(){
        return this.S1.length>0?this.S1.length:this.S2.length
    }
    print(){
        console.log('输出元素')
        let copyofS1=this.S1.concat()//深拷贝
        let copyofS2=this.S2.concat()
        while(copyofS1.length>0)
            console.log(copyofS1.shift())
        while (copyofS2.length>0)
            console.log(copyofS2.pop())
        console.log('输出结束')

    }

}
var b=new QueueInStack()

//下面测试这个类
b.push(1)//[1]
b.push(2)//[1,2]
b.print()//[1,2]
console.log (b.front())//1  [2]
console.log(b.lenth)//1  [2]
console.log (b.front())//2  []
b.push(100)//[100]
b.push(200)//[200]
console.log(b.lenth)//2 [100,200]


