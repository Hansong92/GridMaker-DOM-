const addRowBtn = document.querySelector('.add-row')
const addColumnBtn = document.querySelector('.add-column')
const removeRowBtn = document.querySelector('.remove-row')
const removeColumnBtn = document.querySelector('.remove-column')
const colorSelection = document.getElementById('colorSelection')
const fillAllUncoloredCellsBtn = document.querySelector('.fill-all-uncolored-cells')
const fillAllCells = document.querySelector('.fill-all-cells')
const clearAllCells = document.querySelector('.clear-all-cells')

let cells = 1

addRowBtn.addEventListener('click', addRowToGrid)
addColumnBtn.addEventListener('click', addColumnToGrid)
removeRowBtn.addEventListener('click', removeRowFromGrid)
removeColumnBtn.addEventListener('click', removeColumnFromGrid)
colorSelection.addEventListener('change', colorChange)
fillAllUncoloredCellsBtn.addEventListener('click', filluncoloredCells)
fillAllCells.addEventListener('click', fillAllCellsWithCurrentColor)
clearAllCells.addEventListener('click', clearAllCellsToInitialColor)
renderColors()

function addRowToGrid () {
    let newRow = document.createElement('tr')
    let grid = document.getElementById('grid')
    newRow.classList.add('grid-row')
    grid.appendChild(newRow)
    for (let i = 0; i < cells; i++) {
        newRow.appendChild(createColumn())
    }
}

function addColumnToGrid () {
    cells++
    let rows = document.getElementsByClassName('grid-row')
    for (let i = 0; i < rows.length; i++) {
        rows[i].appendChild(createColumn())
    }
}

function removeRowFromGrid () {
    let grid = document.getElementById('grid')
    let lastRow = document.getElementsByClassName('grid-row')[grid.rows.length - 1]
    grid.removeChild(lastRow)
}

function removeColumnFromGrid () {
    let rows = document.getElementsByClassName('grid-row')
    for (let i = 0; i < rows.length; i++) {
        rows[i].removeChild(rows[i].getElementsByClassName('grid-cell')[cells - 1])
    }
    cells--
}

function createColumn () {
    let newCell = document.createElement('td')
    newCell.classList.add('grid-cell')
    newCell.addEventListener('click', () => {
        newCell.style.backgroundColor = colorSelection.value
    })
    return newCell
}

function colorChange () {
    const colorWrapper = document.querySelector('.color-wrapper')
    colorWrapper.style.backgroundColor = colorSelection.value
}

function filluncoloredCells () {
    const cells = document.querySelectorAll('.grid-cell')
    cells.forEach(cell => {
        if (getComputedStyle(cell).backgroundColor == 'rgba(0, 0, 0, 0)') {
            cell.style.backgroundColor = colorSelection.value
        }
    })
}

function fillAllCellsWithCurrentColor () {
    const cells = document.querySelectorAll('.grid-cell')
    cells.forEach(cell => {
        cell.style.backgroundColor = colorSelection.value
    })
}

function clearAllCellsToInitialColor () {
    const cells = document.querySelectorAll('.grid-cell')
    cells.forEach(cell => {
        cell.style.backgroundColor = 'rgba(0, 0, 0, 0)'
    })
}

function renderColors () {
    const colorSelection = document.getElementById('colorSelection')
    CSS_COLOR_NAMES.forEach(color => {
        let newOption = document.createElement('option')
        newOption.value = color
        newOption.textContent = color
        newOption.style.backgroundColor = color
        colorSelection.appendChild(newOption)
    })
    let newOption = document.createElement('option')
}

