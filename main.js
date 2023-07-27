const search = document.querySelector('#search')
const gallery = document.querySelector('.gallery')
const photos = document.querySelectorAll('.gallery .item')

search.addEventListener('input', filterPhotos)

function filterPhotos() {
  const searchText = search.value?.toLowerCase()

  gallery.innerHTML = ''

  if (!searchText) {
    photos.forEach(photo => {
      const millisecondsDelay = (gallery.childNodes.length + 1) * 200
      photo.style = `--delay: ${millisecondsDelay}ms`
      
      gallery.appendChild(photo)
    })
    return
  }

  photos.forEach(photo => {
    const title = photo.querySelector('h2').textContent?.toLowerCase()

    if (title.includes(searchText)) {
      const millisecondsDelay = (gallery.childNodes.length + 1) * 200
      photo.style = `--delay: ${millisecondsDelay}ms`
      
      gallery.appendChild(photo)
    }
  })
}
