# Importação de Dados
```python
import numpy as np
url = 'https://raw.githubusercontent.com/alura-cursos/numpy/dados/apples_ts.csv'
dado = np.loadtxt(url,delimiter=',',usecols=np.arange(1,88,1))
#Importará colunas do número 1 até 87, conforme contagem na tabela csv.
```