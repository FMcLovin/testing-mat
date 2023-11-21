export function media(numberList : number[]){

    var media = 0;

    for (let index = 0; index < numberList.length; index++) {
      media += numberList[index];
    }

    media = media / numberList.length;

    return media;

}
