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
- Treinamento:
    - Treinar com os dados reais
- Testes:
    - Definir novo conjunto de dados reais e identificar como "resultados esperados".
    - Testar o novo conjunto de dados reais definidos anteriormente.
        - Classificar com Algoritmos Estimadores do sklearn
        - Verificar acurácia da classificação
            - Taxa de acerto
            - Taxa de erros
- Retreinamento:
    - Treinar novamente com os novos dados dos "resultados esperados".
    - Se necessário, devido problema nos testes anteriores, aumentar a quantidade de dados do treino e retestar.
- Otimizar o algoritmo de classificação
- Prever a classificação

```python
# Dados Reais para Treinamento 1
porco1 = [0, 1, 0]
porco2 = [0, 1, 1]
porco3 = [1, 1, 0]
cachorro1 = [0, 1, 1]
cachorro2 = [1, 0, 1]
cachorro3 = [1, 1, 1]

# Lista com dados reais
dados_reais = [porco1, porco2, porco3, cachorro1, cachorro2, cachorro3]
# Classe com respostas esperadas
# 0 ou 1 não se referem mais à x1, x2 ou x3.
# 0 significa porco
# 1 significa cachorro
classes_dos_dados_reais = [0, 0, 0, 1, 1, 1]

from sklearn.svm import LinearSVC
model = LinearSVC()
model.fit(dados_reais, classes_dos_dados_reais)
```