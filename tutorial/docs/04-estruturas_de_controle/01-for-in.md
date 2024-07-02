# Loops
```python
for elemento in iteravel:
    # bloco de execução
```  

## Loop em uma list
```python
idades = [15, 87, 32, 45, 67, 37]
for i in idades:
    print(i)
    # Retorna os items:
    # 15
    # 87
    # 32
    # 45
    # 67
    # 37
``` 

## Loop em uma list com enumerate
```python
idades = [15, 87, 32, 45, 67, 37]
for i in enumerate(idades):
    print(i)
    # Retorna as tuplas:
    # (0, 15)
    # (1, 87)
    # (2, 32)
    # (3, 45)
    # (4, 67)
    # (5, 37)
for i in enumerate(idades):
    print(i[0], i[1])
    # Retorna os valores:
    # 0 15
    # 1 87
    # 2 32
    # 3 45
    # 4 67
    # 5 37
``` 

## Loop em uma tuple de muitos elementos
```python
idades = (15, 87, 32, 45, 67, 37)
for i in idades:
    print(i)
    # Retorna os items:
    # 15
    # 87
    # 32
    # 45
    # 67
    # 37
``` 

## Loop em uma tuple de muitos elementos com enumerate
```python
idades = (15, 87, 32, 45, 67, 37)
for i in enumerate(idades):
    print(i)
    # Retorna os items:
    # (0, 15)
    # (1, 87)
    # (2, 32)
    # (3, 45)
    # (4, 67)
    # (5, 37)
``` 

## loop com range(len(indexed_object))
```python
idades = [15, 87, 32, 45, 67, 37]
for i in range(len(idades)):
    # range(len(XXX)) gera uma sequência de 0 até length-1. 
    # Assim, i da sequência pode ser usado no loop.
    print(i, idades[i])

``` 

## loop com enumerate
- Use `enumerate` para ter `tuples` onde o primeiro elemento da tuple é o index do iterable.
```python
idades = [15, 87, 32, 45, 67, 37]
for i in enumerate(idades):
    # enumerate gera lista de tuplas
    # A posição 0 da dupla contem o index
    # A posição 1 da dupla contem o valor
    print(i, i[0], i[1])
```

## loop com enumerate e unpacking
```python
for indice, idade in enumerate(idades): 
    # unpacking da tupla gravando indice e idade
    print(indice, idade)

variable_name1 = ("Algum nome1", 31, 1981)
variable_name2 = ("Algum nome2", 21, 1990)
lista_de_tuplas = [variable_name1, variable_name2]
for nome, _, _ in enumerate(lista_de_tuplas): 
    # unpacking da tupla gravando nome e descartando demais campos.
    print(nome)
``` 