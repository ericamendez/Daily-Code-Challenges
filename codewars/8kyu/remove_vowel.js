function shortcut (string) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    return string.split("").filter(s => !vowels.includes(s)).join('')
  }