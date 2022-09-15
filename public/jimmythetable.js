const formatDate = date => {
  return date.toString().substring(0, 10)
}

fetch('/api/jimmythe', {
  method: 'POST'
}).then((res) => {
  res.json().then(result => {
    for (const [key, value] of Object.entries(result)) {
      const input = document.getElementsByName(key)[0];
      if (input) {
        if (value && key.toString().includes('date')) {
          input.value = formatDate(value);
        }
        else {
          input.value = value;
        }
      }
    }
  })
})