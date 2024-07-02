# Função map()
- recebe uma função e recebe um iteravel.
- Para cada item do iteravel, passa o item para a função e grava o retorno.
- No final, retorna um mapa com todos os retornos gravados.
```python
def myfunc(a):
  return len(a)

x = map(myfunc, ('apple', 'banana', 'cherry'))

print(x)  # <map object at 0x150f5e2c4130>

#convert the map into a list, for readability:
print(list(x)) # [5, 6, 6]
```

## Uso de map() com lambda
- Código pode gerar dificuldades de leitura. Ter cuidado...
```python 
# map(lambda: input_representante_iteravel: expr_processamento_input, iteravel_com_os_inputs_a_serem_usados)
map_variable = map(lambda x : x + 2, [1, 2, 3])
print(map_variable)
print(list(map_variable))
```
