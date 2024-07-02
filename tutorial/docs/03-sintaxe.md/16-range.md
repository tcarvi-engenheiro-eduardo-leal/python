# range()
- Gera uma sequência de números inteiros.
- É uma sequência imutável de números
- range(stop)
    - Padrão de start = 0
    - Padrão de step = 1
- range(start, stop, step)

```python
for contador in range(10):
    print(contator) # 0, 1. 2, 3, 4, 5, 6, 7, 8, 9
```  

```python
for contador in range(3, 10):
    print(contator) # 3, 4, 5, 6, 7, 8, 9
```  

```python
for contador in range(3, 10, 2):
    print(contator) # 3, 5, 7, 9
```  