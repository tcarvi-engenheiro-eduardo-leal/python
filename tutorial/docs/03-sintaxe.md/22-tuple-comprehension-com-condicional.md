# Tuple comprehension com condicional

- Condicional no final do código
```python
# Generator comprehension for tuples
# new_generator = [expression for item in iterable if truth_testing_value == True]
tuple_name = ("a", "b", "r")
new_generator = (x for x in tuple_name if x not in 'abc') # generator comprehension
# expression that may cause modification: x
# connector: for
# item in iterable: x in tuple_name
# optional condition: if x not in 'abc'
# DEFINIÇÃO DE TUPLE segue fluxo diferente do usado 
#        em list e em set pois tuplas são imutáveis.
new_tuple = tuple(new_generator) 
# new_tuple = ("a", "b")
```

- Obs. Iterable pode se tuple ou set ou list. Até mesmo o dict pode ser usado como iterable.