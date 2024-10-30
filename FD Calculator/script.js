function calculeteMaturityAmount() {
    
    const principle = parseFloat(document.getElementById('principle').value)
    const interestRate = parseFloat(document.getElementById('InterestRate').value)
    const tenure = parseFloat(document.getElementById('tenure').value)

    const maturityAmount = principle + (principle * interestRate * tenure)/ 100

    document.getElementById('result').innerText = `Maturity Amout: ${maturityAmount.toFixed(2)}`
}

document.getElementById('calculateBtn').addEventListener('click', calculeteMaturityAmount)