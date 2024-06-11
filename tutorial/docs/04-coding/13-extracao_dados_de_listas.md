# Extração de dados de listas
## Extração com dict comprehension e range()
```python
dado1 = {"key1", "key2", "key3"}
dado2 = {4, 8, 12}
resultado_desejado = {dado1[i]: dado2[i] for i in range(len(dado1))}
```

## Extração com dict comprehension, range() e filter
```python
dado1 = {"key1", "key2", "key3"}
dado2 = {4, 8, 12}
resultado_desejado = {dado1[i]: dado2[i] for i in range(len(dado1)) if dado2[i] > 7}
```