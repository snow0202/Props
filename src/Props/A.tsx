import { B } from './B'

export const A = () => {
    const string: string[] = ["はしもと", "かんな"];
    const num: number = 1;
    return (
        <B 
            st={string}
            nu={num}
         />
    )
}