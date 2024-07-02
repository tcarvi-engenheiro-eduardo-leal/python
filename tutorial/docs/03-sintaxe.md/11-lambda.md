# lambda

A lambda function is a small anonymous function.  
A lambda function can take any number of arguments, but can only have one expression.  
- lambda `arguments` : `expression`

```python
lambda_name = lambda x : x + 2
retorno_lambda = lambda_name(3)   # retorna 5

x = lambda a, b : a * b
print(x(5, 6))  # retorna 30
``` 

## Uso do lambda
- lambda não se refere apenas a uma forma sintética de escrever função.
- lambda pode ser usado em locais onde uma função anônima, executada rapidamente, é conveniente.
- Por exemplo:  
```python
def myfunc(n):
  return lambda a : a * n

mydoubler = myfunc(2)
mytripler = myfunc(3)

print(mydoubler(11))
print(mytripler(11))
```  
- Neste exemplo, usa-se lambda para que se definir 2 funções diferentes definidas no momento da chamada.