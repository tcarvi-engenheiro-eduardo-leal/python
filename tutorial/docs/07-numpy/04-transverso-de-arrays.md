# Transverso de Arrays

## Escalar 0-d
```python
import numpy as np
## O Transverso de um array de 0 dimensão é igual a ele mesmo.
dado_teste = np.array(42)  # Gera 42, mas no formato array de 0 dimensão.
print(dado_teste) # 42
print(dado_teste.ndim) # 0 # Quantidade de dimensões do dado
print(dado_teste.size) # 1 # Quantidade de dados
print(dado_teste.shape) # () # Quantidade de linhas e colunas
print(dado_teste.T) # 42
print(dado_teste.T.ndim) # 0 # Quantidade de dimensões do dado
print(dado_teste.T.size) # 1 # Quantidade de dados
print(dado_teste.T.shape) # () # Quantidade de linhas e colunas
```  

## Array Unidimensional 1-d
```python
import numpy as np
## O Transverso de um array de 1 dimensão é igual a ele mesmo.
dado_teste = np.array([4, 5, 67, 89, 9])  # Gera [4, 5, 67, 89, 9], no formato array de 1 dimensão.
print(dado_teste) # [4, 5, 67, 89, 9]
print(dado_teste.ndim) # 1 # Quantidade de dimensões do dado
print(dado_teste.size) # 5 # Quantidade de dados
print(dado_teste.shape) # (5,) # Quantidade do primeiro array = 5, Quantidade do segundo array = 0
print(dado_teste.T) # 42
print(dado_teste.T.ndim) # 1 # Quantidade de dimensões do dado
print(dado_teste.T.size) # 5 # Quantidade de dados
print(dado_teste.T.shape) # (5) # Quantidade de linhas e colunas
```  

## Array Bidimensional 2-d
```python
import numpy as np
## O Transverso de um array de 2 dimensões é uma operação matricial. Troca-se as linhas pelas colunas.
dado_teste = np.array([
                       [4, 5, 9, 6],
                       [9, 8, 7, 5],
                       [4, 7, 0, 3]
                      ])
print(dado_teste)
print(dado_teste.ndim) # 2 # Quantidade de dimensões do dado
print(dado_teste.size) # 24 # Quantidade de dados
print(dado_teste.shape) # (3, 4) # Quantidade do primeiro array = 3, Quantidade do segundo array = 4
print(dado_teste.T)
print(dado_teste.T.ndim) # 2 # Quantidade de dimensões do dado
print(dado_teste.T.size) # 24 # Quantidade de dados
print(dado_teste.T.shape) # (3, 4) # Quantidade do primeiro array = 3, Quantidade do segundo array = 4
```  

## Array Tridimensional 3-d
- Uma lista de arrays bidimensionais.
```python
import numpy as np
## O Transverso de um array de 3 dimensões é uma operação matricial. Troca-se as linhas pelas colunas.
## A mudança ocorre nos dois últimos arrays, apenas.

dado_teste = np.array([
                       [
                        [4, 5, 9, 4],
                        [9, 8, 7, 4],
                        [4, 7, 0, 5]
                       ],
                       [
                        [6, 6, 6, 5],
                        [9, 5, 7, 1],
                        [9, 9, 9, 3]
                       ]
                      ])
print(dado_teste)
print(dado_teste.ndim) # 2 # Quantidade de dimensões do dado
print(dado_teste.size) # 48 # Quantidade de dados
print(dado_teste.shape) # (2, 3, 4) # Quantidade do primeiro array = 2, Quantidade do segundo array = 3, Qauntidade do terceiro array = 4 
print(dado_teste.T)
print(dado_teste.T.ndim) # 2 # Quantidade de dimensões do dado
print(dado_teste.T.size) # 48 # Quantidade de dados
print(dado_teste.T.shape) # (2, 4, 3) # Quantidade do primeiro array = 2, Quantidade do segundo array = 3, Qauntidade do terceiro array = 4 
```  

## Array Multidimensional n-d
## O Transverso de um array de n dimensões é uma operação matricial. Troca-se as linhas pelas colunas.
## A mudança ocorre nos dois últimos arrays, apenas.
```python
import numpy as np

np.array(
    [
        [
         [4, 5, 9],
         [9, 8, 7],
         [4, 7, 0]
         ],
         [
         [6, 6, 6],
         [9, 5, 7],
         [9, 9, 9]
         ],
         [
         [6, 6, 6],
         [9, 5, 7],
         [9, 9, 9]
        ],
        [
         [4, 5, 9],
         [9, 8, 7],
         [4, 7, 0]
         ],
         [
         [6, 6, 6],
         [9, 5, 7],
         [9, 9, 9]
         ],
         [
         [6, 6, 6],
         [9, 5, 7],
         [9, 9, 9]
         ]
    ])
```  