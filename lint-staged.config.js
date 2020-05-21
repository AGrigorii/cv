module.exports = {
    '*.ts?(x)': ['eslint --fix', 'prettier --write', 'import-sort --write'],
    '*.scss': ['stylelint --fix']
};
