const Factory = require('fte.js').Factory;
const path = require('path');
const fs = require('fs-extra');

const raw = new Factory({
  ext: ['njs'],
  root: path.resolve(__dirname, '../templates'),
  preload: true,
  debug: true,
});

const context = {
  yota: 'Й',
  vowels__simple: ['И', 'Э', 'А', 'О', 'У', 'Ы'],
  vowels__yoted: ['Я', 'Е', 'Ё', 'Ю'],
  vowels__all: ['Ы', 'Э', 'А', 'О', 'У', 'И', 'Я', 'Е', 'Ё', 'Ю'],
  paired__vowels: [['Ы', 'И'], ['Э', 'Е'], ['А', 'Я'], ['О', 'Ё'], ['У', 'Ю']],
  voiceless__consonants: ['П', 'Т', 'К', 'X', 'С', 'Щ', 'Ш'],
  consonants: [],
  paired: [],
  voiceless___paired__consonants: [['Щ', 'Ч'], ['X', 'Ц']],
  voiced__consonants: ['М', 'Н', 'Р'],
  voiced__consonants: ['Б', 'Г', 'Д', 'Ш', 'Ж', 'Р', 'З', 'Ч', 'Ц'],
  paired__consonants: [
    ['Б', 'П'],
    ['Г', 'К'],
    ['Д', 'Т'],
    ['Ш', 'Ж'],
    ['С', 'З'],
    ['Щ', 'Ч'],
    ['X', 'Ц'],
  ],
};

fs.writeFileSync('level0.md', raw.run(context, 'level0'));
fs.writeFileSync('level1.md', raw.run(context, 'level1'));
