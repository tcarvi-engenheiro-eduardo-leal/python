# Classification

## Etapas
- Definir um modelo de treino
    - Modelo: 
        - X=Dado=Item=Container_de_features, no formato de list.
        - Cada X possui 3 features [x1, x2,  x3].
            - x1 indica a existência ou não de uma feature A.
            - x2 indica a existência ou não de uma feature B.
            - x3 indica a existência ou não de uma feature C.
        - Cada feature pode ter valor 0 ou 1. 
            - Valor 0 indica que X não tem a feature
            - Valor 1 indica que o dado tem a feature
        - Definição do modelo:
            - `X = [x1, x2, x3]`
- Definir dados reais para treino, seguindo o modelo definido anteriormente.
    - `X_tipo1_1 = [1, 1, 1]`
    - `X_tipo1_2 = [0, 0, 1]`
    - `X_tipo1_3 = [0, 1, 0]`
    - `X_tipo2_1 = [1, 1, 1]`
    - `X_tipo2_2 = [0, 0, 1]`
    - `X_tipo2_3 = [0, 1, 0]`
- Definir dados com os resultados esperados
- Treinar com base na lista de dados e nos resultados esperados
- Previsão com algoritmos de classificação
    - Estimadores do sklearn
- Verificar acurácia
    - Taxa de acerto
    - Taxa de erros

```python
var1 = [1, 0, 1]

```