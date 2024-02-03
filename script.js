document.addEventListener('DOMContentLoaded', function () {
  var n = prompt('Enter a number:');
  n = parseFloat(n);

  if (!isNaN(n)) {
    var table = '<h2>Multiplication Table for ' + n + '</h2>';

    for (var i = 1; i <= 10; i++) {
      var result = i * n;
      table += '<p>' + i + ' x ' + n + ' = ' + result + '</p>';
    }

    var el = document.getElementById('blackboard');
    el.innerHTML = table;
  } else {
    var errorMsg = '<p>Please enter a valid number.</p>';
    var errorEl = document.getElementById('blackboard');
    errorEl.innerHTML = errorMsg;
  }
});
