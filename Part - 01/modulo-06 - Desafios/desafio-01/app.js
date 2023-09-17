import f from '../auxiliaryFunctions.js';

let media = f.gets();

if(media < 5){
    f.print("Reprovado!");
}else if(media >= 5 && media < 7){
    f.print("Recuperação!");
}else{
    f.print("Aprovado!");
}