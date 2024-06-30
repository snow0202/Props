import { B } from './B'

export const A = () => {
    const string: string[] = ["テスト", "てすと"];
    const num: number = 1;
    return (
        <B 
            st={string}
            nu={num}
         />
    )
}