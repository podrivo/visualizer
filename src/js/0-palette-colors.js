
// first item is the background
palette1 = ['#25BEEA', '#C6483F', '#D0832A', '#AB5D45', '#EB675D', '#5B194A', '#A13084']
palette2 = ['#1D1D1D', '#C54A41', '#FCB461', '#EA695F', '#30B8FF', '#5AAAD3', '#4B2040']
palette3 = ['#2F263B', '#124EAB', '#E27E77', '#1571FF', '#2B3548', '#FFCFB6', '#F6B7CE']
palette4 = ['#266EFF', '#E27E77', '#FFCFB6', '#F6B7CE', '#2B3548', '#124EAB', '#0098FF']
palette5 = ['#29313A', '#E27E77', '#FFCFB6', '#266EFF', '#FFFEF1', '#30B8FF', '#4C4E8D', '#B8B8B8']
paletteArr = [palette1, palette2, palette3, palette4, palette5]

// randomize palettes
randomPaletteArr = paletteArr[Math.floor(Math.random() * paletteArr.length)]
document.body.style.backgroundColor = randomPaletteArr[0];

// randomize previous palette colors
function randomColor() {
  return randomPaletteArr[Math.floor(Math.random() * randomPaletteArr.length)]
}
