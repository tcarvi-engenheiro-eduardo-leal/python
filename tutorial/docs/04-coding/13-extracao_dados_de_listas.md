# Extração de dados de listas
## Extração com dict compreension and range
```python
dado1 = {"key1", "key2", "key3"}
dado2 = {4, 8, 12}
resultado_desejado = {dado1[i]: dado2[i] for i in range(len(dado1))}
```