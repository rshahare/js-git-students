// https://alligator.io/js/preventdefault/


// Normally, when you click on a checkbox it’ll toggle the check. However if you use preventDefault it will actually stop the broswer from doing that.

<input type="checkbox" id="myCheckbox">  

document
  .getElementById('myCheckbox')
  .addEventListener('click', (event) => {
    event.preventDefault();  // ??
  });
  
  