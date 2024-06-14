# Ver dado como tabela
```python
import matplotlib.pyplot as plt
# Parâmetro cellText é opcional.
# Mas se deve indicar pelo menos este campo ou cellColours.
# cellText: 2D list of str. The texts to place into the table cells.
# cellLoc: The alignment of the text within the cells
# rowLoc: The text alignment of the row header cells
# loc: The position of the cell with respect to ax. 
# edges: The cell edges to be drawn with a line. 
the_table = plt.table(cellText=tabela,
                      cellLoc="left",
                      rowLoc="left",
                      colLoc="center",
                      loc='top',
                      edges="closed")
the_table
``` 
