# Manipular dados em coluna de tabela
- 
```python
import numpy as np
url = 'https://raw.githubusercontent.com/alura-cursos/numpy/dados/apples_ts.csv'
dado_importado = np.loadtxt(url,delimiter=',',usecols=np.arange(1,88,1))
dado_shape_correto = dado_importado.T
# Identificado que datas se apresentam de forma errada.
# Datas de apresentam como 1.2013, 2.2013, 3.2013, ...
# melhoria com sequência numérica ordenada
datas = nparange(1, 88, 1)
precos = dado_shape_correto[:,1:] # Todas as linhas. Todas as colunas, com excessão da primeira coluna de datas.
import matplotlib.pyplot as plt
plt.plot(datas,precos[:,0])  
``` 