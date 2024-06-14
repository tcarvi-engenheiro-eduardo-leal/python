# Ver dado como tabela
```python
import matplotlib.pyplot as plt
# 6 colunas
columns = ('Col1', 'Col2', 'Col3', 'Col4', 'Col5', 'Col6')
rows = datas # NpArray de dimensão (X,6), sendo X qualquer valor numérico de linhas.
the_table = plt.table(cellText=tabela,
                      cellLoc="left",
                      rowLoc="left",
                      colLoc="center",
                      loc='top',
                      edges="closed")
plt.show()
``` 
