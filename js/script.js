let output = document.querySelector('.output-numer')

var balance = +document.querySelector('.balance-size').innerHTML

function proverka(){
    if (balance == 0){
        document.querySelector('#rock').disabled = true
        document.querySelector('#sicross').disabled = true
        document.querySelector('#papper').disabled = true
    }
}

let rock = document.querySelector('#rock')
rock.addEventListener('click', () => {
    let bet = +document.querySelector('.bet').value
    if(bet != 0){
        let random = Math.random()
        if(bet <= balance){
            if (random < 0.67){
                if(random < 0.33){
                    output.innerHTML = 'Ничья'
                }
                else{
                    output.innerHTML = `Выйгрыш +${bet}`
                    let i = document.querySelector('.balance-size').innerHTML = balance + bet
                    balance = i
                }
            }
            else{
                output.innerHTML = `Проигрыш -${bet}`
                let i = document.querySelector('.balance-size').innerHTML = balance - bet
                balance = i
                proverka()
            }
        }
        else{
            alert('Не хватает денег!')
        }
    }
    else(
        alert('Введите ставку')
    )
})

let sicross = document.querySelector('#sicross')
sicross.addEventListener('click', () => {
    let bet = +document.querySelector('.bet').value
    if(bet != 0){
        let random = Math.random()
        if(bet <= balance){
            if (random < 0.67){
                if(random < 0.33){
                    output.innerHTML = `Проигрыш -${bet}`
                    let i = document.querySelector('.balance-size').innerHTML = balance - bet
                    balance = i
                    proverka()
                }
                else{
                    output.innerHTML = 'Ничья'
                }
            }
            else{
                output.innerHTML = `Выйгрыш +${bet}`
                let i = document.querySelector('.balance-size').innerHTML = balance + bet
                balance = i
            }
        }
        else{
            alert('Не хватает денег!')
        }
    }
    else(
        alert('Введите ставку')
    )
})

let papper = document.querySelector('#papper')
papper.addEventListener('click', () => {
    let bet = +document.querySelector('.bet').value
    if(bet != 0){
        let random = Math.random()
        if(bet <= balance){
            if (random < 0.67){
                if(random < 0.33){
                    output.innerHTML = `Выйгрыш +${bet}`
                    let i = document.querySelector('.balance-size').innerHTML = balance + bet
                    balance = i
                }
                else{
                    output.innerHTML = `Проигрыш -${bet}`
                    let i = document.querySelector('.balance-size').innerHTML = balance - bet
                    balance = i
                    proverka()
                }
            }
            else{
                output.innerHTML = 'Ничья'
            }
        }
        else{
            alert('Не хватает денег!')
        }
    }
    else(
        alert('Введите ставку')
    )
})

