# Arrays

## Escalar 0-d
```python
import numpy as np

dado_teste = np.array(42)  # Gera 42, mas no formato array de 0 dimensão.
print(dado_teste) # 42
print(dado_teste.ndim) # 0 # Quantidade de dimensões do dado
print(dado_teste.size) # 1 # Quantidade de dados
print(dado_teste.shape) # () # Quantidade de linhas e colunas
```  

## Array Unidimensional 1-d
```python
import numpy as np

dado_teste = np.array([4, 5, 67, 89, 9])  # Gera [4, 5, 67, 89, 9], no formato array de 1 dimensão.
print(dado_teste) # [4, 5, 67, 89, 9]
print(dado_teste.ndim) # 1 # Quantidade de dimensões do dado
print(dado_teste.size) # 5 # Quantidade de dados
print(dado_teste.shape) # (5,) # Quantidade de linhas e colunas
```  

## Array Bidimensional 2-d
```python
import numpy as np

dado_teste = np.array([[4, 5, 9],
                       [9, 8, 7],
                       [4, 7, 0]
                    ])
print(dado_teste)
print(dado_teste.ndim) # 2 # Quantidade de dimensões do dado
print(dado_teste.size) # 9 # Quantidade de dados
print(dado_teste.shape) # (3,3) #Quantidade de linhas e colunas
```  

## Array Tridimensional 3-d
- Uma lista de arrays bidimensionais.
```python
import numpy as np

# Imagem de televisão
## Array tridimensional com lista de arrays bidimensionais. 
## Para imagem de televisão, usa-se lista com 3 arrays bidimensionais
## O Array final definido representa 
dado_teste = np.array([
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
print(dado_teste)
print(dado_teste.ndim) # 2 # Quantidade de dimensões do dado
print(dado_teste.size) # 9 # Quantidade de dados
print(dado_teste.shape) # (3,3) #Quantidade de linhas e colunas
```  

## Array Multidimensional n-d
- As operações de criação de array não são limitadas a 0, 1, 2 e 3 dimensões. Pode-se criar n dimensões desde que os objetos do mesmo nível tenham o mesmo formato.
- Podemos interpretar uma matriz de ordem superior como um objeto que contém informações sobre outros objetos matemáticos.
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