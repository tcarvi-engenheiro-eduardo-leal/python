# Classification

## Etapas
- Definir um modelo para o treino
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
    - Código python:
    ```python
    X_tipoP_1 = [1, 1, 1]
    X_tipoP_2 = [0, 0, 1]
    X_tipoP_3 = [0, 1, 0]
    X_tipoQ_1 = [1, 1, 1]
    X_tipoQ_2 = [0, 0, 1]
    X_tipoQ_3 = [0, 1, 0]
    ```
- Treinar com os dados reais
    - Código python:
    ```python
    dados_reais_para_treino = [X_tipoP_1, X_tipoP_2, X_tipoP_3, X_tipoQ_1, X_tipoQ_2, X_tipoQ_3]
    classe_dos_dados_reais = [0, 0, 0, 1, 1, 1] # Nesta classificação, 0 significa tipoP e 1 significa tipoQ.
    from sklearn.svm import LinearSVC
    modelo_estimador = LinearSVC()
    modelo_estimador.fit(dados_reais_para_treino, classe_dos_dados_reais)
    ```  
    - Sistema de "Machine Learning" passa a ter conhecimento dos dados usados no treino.
    - Estimador do "Machine Learning" já pode tentar classificar.
- Testes:
    - Definir novo conjunto de dados reais e identificar como "resultados esperados".
    - Código python:
    ```python
    animal_misteriso = [1, 1, 1] # Eu sei que o animal é tipoP mas não informo para aplicativo.
    ```  
    - Estimar com Algoritmos Estimadores do modelo sklearn
        - Código python:
        ```python
        modelo_estimador.predict([animal_misteriso])
        ```  
    - Verificar acurácia da estimativa
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
classe_dos_dados_reais = [0, 0, 0, 1, 1, 1]

from sklearn.svm import LinearSVC
modelo_estimador = LinearSVC()
modelo_estimador.fit(dados_reais, classe_dos_dados_reais)

animal_misteriso = [1, 1, 1] # Eu sei que o animal é cachorro.

# Teste
modelo_estimador.predict(animal_misteriso)
# Certo ou errado?
```