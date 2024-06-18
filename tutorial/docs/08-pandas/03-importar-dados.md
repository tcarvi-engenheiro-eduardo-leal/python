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
print(dados['Valor'].mean()) # extrai comuna 
print(dados.groupby['Tipo'].mean()) # extrai coluna e fixa com index. Depois apresenta média dos valores do index em todas as colunas.