const toggleOpen = document.querySelector('#open-toggle')

function toggleMenu() {
  const navigation = document.querySelector('#navigation')
  navigation.classList.toggle('active-toggle')
}

toggleOpen.addEventListener('click', toggleMenu)
