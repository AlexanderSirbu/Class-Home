const getBalance = bankAccount();
const buttonClick = click();

function bankAccount() {
  let balance = 2345.33;
  return {
    get: function () {
      return balance;
    },
    add: function () {
      balance += parseInt(getValueInput.value);
      return 'was added ' + getValueInput.value
    },
    remove: function () {
      balance -= parseInt(getValueInput.value);
      return 'was removed ' + getValueInput.value
    }
  }
}




function click() {
  return {
    test: function (event) {
      if (event.target.classList.contains("getbalance")) {
        getResult.innerText = getBalance.get();
      } else if (event.target.classList.contains("addmoney")) {
        getResult.innerText = getBalance.add();
        getValueInput.value = '';
      } else if (event.target.classList.contains("remove")) {
        getResult.innerText = getBalance.remove();
        getValueInput.value = '';
      }
    }
  }
}

const getClick = document.querySelector('body');
const getValueInput = document.querySelector('input');
const getResult = document.querySelector('.display');
getClick.addEventListener('click', buttonClick.test);