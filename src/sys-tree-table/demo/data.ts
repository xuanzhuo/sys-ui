export interface DataType {
    id: string;
    name: string;
    age: number;
    children?:DataType[]
}
export function createData(len:number = 2,levelTotal:number = 2){
    function createLevelData(len:number,level:number,pid?:string){
        // if(level >= levelTotal) return
        const data:DataType[]=[];
        for(let i=0;i<len;i++){
            const id = pid?`${pid}-${i+1}`:`${i+1}`;
            data.push({
                id,
                name: 'name' + id,
                age: Math.floor(Math.random() * 2) + 17,
                children: level < levelTotal?createLevelData(len,level+1,id):undefined
            })
        }
        return data
    }
    return createLevelData(len,1)
} 


