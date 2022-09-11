module.exports = (userName) => {
    const date = new Date().getHours()
    console.log(date);
   return new Date().toISOString() + date <= 22 || date >= 18 ? userName + " good evning" : userName + " good morning"
}
