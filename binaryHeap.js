class MaxHeap {
    constructor(){
        // this is where the array that represents our heap will be stored
        this.values = [];
    }
    
    getSize(){
        return this.values.length
    }

    // index of the parent node
    parent(index) {
        return Math.floor((index - 1) / 2);
    }

    // index of the left child node
    leftChild(index) {
        return (index * 2) + 1;
    }

    // index of the right child node
    rightChild(index) {
        return (index * 2) + 2;
    }

    isLeaf(index) {
        return (
            index >= Math.floor(this.values.length / 2) && index <= this.values.length - 1
        )
    }

    swap(index1, index2) {
        [this.values[index1], this.values[index2]] = [this.values[index2], this.values[index1]];
    }

    add(element) {
        // add element to the end of the heap
        this.values.push(element);
        // move element up until it's in the correct position
        this.heapifyUp(this.values.length - 1);
    }

    heapifyUp(index) {
        let currIdx = index
        let parentIdx = this.parent(currIdx);
    
        // 不斷跟 parent 比直到 root（最大）
            // 或找到正確的地方為止（parent > curr）
        while (currIdx > 0 && this.values[currIdx] > this.values[parentIdx]) {
            // swap
            this.swap(currIdx, parentIdx);
            // move up the binary heap
            currIdx = parentIdx;
            parentIdx = this.parent(parentIdx);
        }
    }
    

    extractMax() {
        if (this.values.length < 1) return 'heap is empty';
    
        // get max and last element
        const max = this.values[0];
        const end = this.values.pop();
    
        // 將 array 的最後一個補全 root 的空缺
        this.values[0] = end;
        // 再以 root 為基準，不斷向下排序直到符合 Max Heap
        this.heapifyDown(0);
    
        return max;
    }

    heapifyDown(index) {
        // 確保當下 node 有 child
        if (!this.isLeaf(index)) {
            // 拿取 left , right node 
            let leftIdx = this.leftChild(index)
            let rightIdx = this.rightChild(index)
            let largeIdx = index;
    
            // 如果 child > large Node(parent) ; 交換 IDX
            if (this.values[leftIdx] > this.values[largeIdx]) {
                largeIdx = leftIdx;
            }
            if (this.values[rightIdx] >= this.values[largeIdx]) {
                largeIdx = rightIdx;
            }
    
            // 如果有交換（比較）成功才執行換位
            if (largeIdx !== index) {
                // swap
                this.swap(index, largeIdx);
                this.heapifyDown(largeIdx);
            }
        }
    }

    buildHeap(array) {
        this.values = array;
        // since leaves start at floor(nodes / 2) index, we work from the leaves up the heap
        for(let i = Math.floor(this.values.length / 2); i >= 0; i--){
            this.heapifyDown(i);
        }
    }

    print() {
        let i = 0;
        while (!this.isLeaf(i)) {
            console.log("PARENT:", this.values[i]);
            console.log("LEFT CHILD:", this.values[this.leftChild(i)]);
            console.log("RIGHT CHILD:", this.values[this.rightChild(i)]);
            i++;
        }      
    }
    heapsort(){
        let sortedArr = []
        for(let i=0;i<this.values.length;i++){

        }
    }
}

// let heap = new MaxHeap()
// heap.buildHeap([1,3,5,8,2,9])
// heap.add(13)
// heap.print()

const notSortArr = [7,9,3,12,8]

function createMaxHeap(arr,heapSize){
	for(let i = Math.floor(heapSize/2);i>=0 ;i--){
		heapDown(arr,i,heapSize)
	}
}

function heapDown(arr,i,heapSize){
	let left = i*2+1 , right = i*2+2;
	// 檢查 left 和 right 哪個比較大 ; 且確保不會無限底部輪迴
    let largest = left <= heapSize && arr[left] > arr[i] ? left : i ;

    if (right <= heapSize && arr[right] >= arr[largest]) {
        largest = right;
    }

	if(largest !== i){
		// 交換
		[arr[i],arr[largest]] = [arr[largest],arr[i]]
		// 遞迴到底
		heapDown(arr,largest,heapSize)
	}
}


function heapSort(arr){
	let heapSize = arr.length -1
    
    createMaxHeap(arr,heapSize)
	for(let i = arr.length -1 ; i>=0 ; i--){
		// 每次都將最後一個跟 root（最大） 交換
		[arr[0],arr[i]] = [arr[i],arr[0]]
		// 就可以不管在尾部的 node => 因為已被排序
		heapSize -= 1
		heapDown(arr,0,heapSize)
	}

    return arr
}

console.log(heapSort(notSortArr))