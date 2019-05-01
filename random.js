module.exports = () => {
    const number = Math.random();
    return new Promise((resolve, reject) => {
        if(number > 0.2) resolve(true);
        else reject(false);
    });
}