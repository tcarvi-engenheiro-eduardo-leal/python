# Função enumerate(iteravel)
- Gera tuples a partir de iterável.
- Cada tuple terá como primeiro elemento o index do item da iteração.
    - E tera como segundo elemento o item da iteração. 

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