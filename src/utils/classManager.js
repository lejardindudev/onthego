const classManager = (classArray) => {
    const compiledClass = classArray.filter(classContent=>typeof classContent === "string").join(" ");
    // const compiledClass = array.reduce((acc,classContent) => {
    //     if(!classContent.trim()){
    //         return acc
    //     }
    //     return acc+" "+classContent
    // },"");
    // console.log("retour de helpers/classManager : ",compiledClass);
    return compiledClass;
}

export default classManager;