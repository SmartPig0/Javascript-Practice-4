const hora = document.querySelector('.hora')
const foto = document.querySelector('.foto')
const data = new Date()
const hour = data.getHours()
const min = data.getMinutes()
const sec = data.getSeconds()

hora.innerHTML = `Agora são: ${hour} horas, ${min} minutos e ${sec} segundos.`
foto.src = './lib/c-praiadoperigoso.svg'