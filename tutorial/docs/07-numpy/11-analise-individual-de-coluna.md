# Análise individual de coluna

```python
import numpy as np
url = 'https://raw.githubusercontent.com/alura-cursos/numpy/dados/apples_ts.csv'
dado_importado = np.loadtxt(url,delimiter=',',usecols=np.arange(1,88,1))
dado_shape_correto = dado_importado.T
import matplotlib.pyplot as plt
# Parâmetro cellText é opcional.
# Mas se deve indicar pelo menos este campo ou cellColours.
# cellText: 2D list of str. The texts to place into the table cells.
# cellLoc: The alignment of the text within the cells
# rowLoc: The text alignment of the row header cells
# loc: The position of the cell with respect to ax. 
# edges: The cell edges to be drawn with a line. 
dado_como_tabela = plt.table(cellText=dado_shape_correto,
                              cellLoc="left",
                              rowLoc="left",
                              colLoc="center",
                              loc='top',
                              edges="closed")     
dado_como_tabela

# Estudo individual de todo o gráfico da cidade 1
# dado_shape_correto[:,0] = np.arange(1,88,1) # sequência de 1 até 87
plt.plot(np.arange(1,88,1),dado_shape_correto[:,1])
plt.legend(['preços na cidade 1'])

#
# Verificação de Dados Defeituosos
#
# Estudo individual de todo o gráfico da cidade 1
soma_de_nan = sum(np.isnan(dado_shape_correto[:,1]))
soma_de_nan
```  
