const classManager = (classArray) => {
    const compiledClass = classArray.filter(classContent=>typeof classContent === "string").join(" ");
    return compiledClass;
}

export default classManager;