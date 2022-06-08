class HashTable{
    constructor(size){
        this.size = size
        this.table = []
        for(let i = 0; i<this.size;i++){
            this.table.push([]);
        }
    }
    // parse string
    parse(str){
        let res = 0
        for(let i = 0; i<str.length;i++){
            console.log(res)
            res += str.charCodeAt(i)
        }

        return this.hashDiv(res)
    }

    // divsion method
    hashDiv(key){
        return key % this.size
    }

    // mutlplication method
    hashMutli(key){
        let parseKey
        if(typeof(key) !== 'number'){
            parseKey = this.parse(key)
        }else{
            parseKey = key
        }

        const A = (Math.sqrt(5)-1)/2
        return Math.floor(this.size*((parseKey*A)%1))
    }

    // set item
    set(key,value){
        let index = this.hashMutli(key)
        this.table[index].push({key,value})
    }

    // get item
    get(key){
        let index = this.hashMutli(key)

        for(let i=0;i<this.table[index].length ;i++){
            if(this.table[index][i].key === key){
                return this.table[index][i]
            }
        }

        return null
    }

    printAll(){
        console.log(this.table)
    }
}


let h1 = new HashTable(6)

// h1.set(11424,"Mike")
// h1.set(6254,"Jamse")
// h1.set(4171,"Drake")
// h1.set(554,"Kevin")

h1.set('white',"#fff")
h1.set('black',"#000")
h1.set('red',"#ff0000")
h1.set('megenta',"#FF00FF")

h1.printAll()

console.log(h1.get('white'))