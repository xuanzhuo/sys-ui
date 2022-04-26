export interface DataType {
    id: number;
    name: string;
    age: number;
}

const data: DataType[] = new Array(10).fill('').map((item: DataType, index) => {
    return {
        id: index,
        name: `name${index}`,
        age: Math.floor(Math.random() * 2) + 17,
    };
});

export function createData(len:number){
    const data: DataType[] = new Array(len).fill('').map((item: DataType, index) => {
        return {
            id: index,
            name: `name${index}`,
            age: Math.floor(Math.random() * 2) + 17,
            sex:'男',
        };
    });
    return data
}

export default data;
