# Arrays

## Escalar 0-d
```python
import numpy as np

np.array(42)
```  

## Array Unidimensional 1-d
```python
import numpy as np

np.array([4, 5, 67, 89, 9])
```  

## Array Bidimensional 2-d
```python
import numpy as np

np.array([4, 5, 9],
         [9, 8, 7],
         [4, 7, 0])
```  

## Array Tridimensional 3-d
- Uma lista de arrays bidimensionais.
```python
import numpy as np

np.array([
         [4, 5, 9],
         [9, 8, 7],
         [4, 7, 0]
         ],
         [
         [6, 6, 6],
         [9, 5, 7],
         [9, 9, 9]
         ])
```  