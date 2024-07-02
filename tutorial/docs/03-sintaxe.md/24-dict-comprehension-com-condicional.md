# Dict comprehension com condicional

- Condicional no final do código
```python
# dict comprehension
dict_name1 = {'jack': 23, 'otherjack': 40}
# new_dict = [expression for item in iterable if truth_testing_value == True]
new_list = [k: v for (k,v) in dict_name if "t" in k] # Dict comprehension
# expression: k: v
# connector: for
# item in iterable: (k,v) in dict_name
# optional condition: if "t" in k

# new_list = {'otherjack': 40}
```  
