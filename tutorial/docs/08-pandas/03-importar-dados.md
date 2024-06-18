@ Importar Dados
```python
import pandas as pd

url = 'xxxxxxx'
dados = pd.read_csv(url, sep=';')

print(dados.shape) # (x,y) # -> x-> collumns, y -> lines
print(dados.columns)
print(dados.info())
print(dados['Tipo']) # Imprime a coluna Tipe como Serie
print(dados[['Tipo', 'Quarto']]) # Imprime a coluna Tipe como Serie
