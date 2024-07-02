# Dict comprehension com condicional

- Condicional no final do código
```python
# dict comprehension
# new_dict = [expression for item in iterable if truth_testing_value == True]
new_list = [k: v for (k,v) in dict_name if "a" in v] # Dict comprehension
# expression: k: v
# item: (k,v)
# iterable: dict_name
# optional condition: if "a" in v
```  
