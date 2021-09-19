export const generateNRIC = async (state, fn) => {
    const startLetters = "STFG"
    const alpha = "ABCDEFGHIJKLMNOPQRTSUVWXYZ"

    let newICArr = [`${startLetters[Math.floor(Math.random()*4)]}`, `${alpha[Math.floor(Math.random()*4)]}`]
    for (let i = 0; i < 7; i++) {
        newICArr.splice(1,0,Math.floor(Math.random()*10))
    }

    const newIC = newICArr.join("")
    
    if(newIC.length === 9 && !state.includes(`${newIC}`)){
        console.log(state.includes(`${newIC}`))
        await fn(prevState => {
            return [...prevState, newIC]
        })
    } else {
        console.log("unique nric")
    }

    return newIC
}