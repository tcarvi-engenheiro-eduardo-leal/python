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
  return lambda a : a * n # O parâmetro n torna-se um valor fixo, não variável, na função retornada.

mydoubler = myfunc(2) # n==2 passa a ser um valor fixo, não variável, na função mydoubler
mytripler = myfunc(3) # n==3 passa a ser um valor fixo, não variável, na função mytripler

# Lógica relevante!
print(mydoubler(11)) # O parâmetro passado aqui é o a, da função anônima criada por lambda
print(mytripler(11)) # O parâmetro passado aqui é o a, da função anônima criada por lambda
```  
- Neste exemplo, usa-se lambda para que se definir 2 funções diferentes definidas no momento da chamada.