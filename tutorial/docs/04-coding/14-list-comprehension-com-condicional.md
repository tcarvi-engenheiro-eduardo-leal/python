# List comprehension com condicionais

- Condicional no começo do código
```python
dado1 = ["abc", "b", "c", "d"]
lista_dado1 = [dado if "a" in dado for dado in dado1]
```
- Condicional no final do código
```python
dado1 = ["abc", "b", "c", "d"]
lista_dado1 = [dado for dado in dado1 if "a" in dado]
```