# Classification

## Etapas
- Definir um modelo de treino
    - Modelo: 
        - Dado, no formato de list, que possui 3 features.
        - Cada feature com valor 0 ou 1. 
        - Valor 0 indica que o dado não tem a feature
        - Valor 1 indica que o dado tem a feature
        - `dado = [has_feature1, has_feature2, has_feature3]`
- Definir uma lista com dados para treino
    - Exemplo: 
        - `dado_tipo1_1 = [1, 1, 1]`
        - `dado_tipo1_2 = [0, 0, 1]`
        - `dado_tipo1_3 = [0, 1, 0]`
        - `dado_tipo2_1 = [1, 1, 1]`
        - `dado_tipo2_1 = [0, 0, 1]`
        - `dado_tipo2_1 = [0, 1, 0]`
- Definir dados com os resultados esperados
- Treinar com base na lista de dados e nos resultados esperados

```python
var1 = [1, 0, 1]

```