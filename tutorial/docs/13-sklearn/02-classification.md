# Classification

## Etapas
- Definir um modelo para o treino
    - Modelo: 
        - Item=Container_de_features, no formato de list.
        - Cada Item possui 3 features [Feature1, Feature2,  Feature3].
            - Feature1 indica a existência ou não da feature 1.
            - Feature2 indica a existência ou não da feature 2.
            - Feature3 indica a existência ou não da feature 3.
        - Cada feature pode ter valor 0 ou 1. 
            - Valor 0 indica que X não tem a feature
            - Valor 1 indica que o dado tem a feature
        - Definição do modelo:
            - `Modelo = [Feature1, Feature2, Feature3]`
- Definir dados reais para treino, seguindo o modelo definido anteriormente.
    - Código python:
    ```python
    item_p_1 = [1, 1, 1]
    item_p_2 = [0, 0, 1]
    item_p_3 = [0, 1, 0]
    item_q_1 = [1, 1, 1]
    item_q_2 = [0, 0, 1]
    item_q_3 = [0, 1, 0]
    ```
- Treinar com os dados reais
    - Código python:
    ```python
    # Processamento matemático: f(X) = Y
    train_x = [item_p_1, item_p_2, item_p_3, item_q_1, item_q_2, item_q_3]
    train_y = [0, 0, 0, 1, 1, 1] # labels: 0 significa item_p e 1 significa item_q.
    from sklearn.svm import LinearSVC
    modelo_estimador = LinearSVC()
    modelo_estimador.fit(train_x, train_y)
    ```  
    - Sistema de "Machine Learning" passa a ter conhecimento dos dados usados no treino.
    - Estimador do "Machine Learning" já pode tentar classificar.
- Testes:
    - Definir novo conjunto de dados reais e identificar como "resultados esperados".
    - Código python:
    ```python
    animal_misterisoA = [1, 1, 1] # Eu sei que o animal é tipoP mas não informo para aplicativo.
    animal_misterisoB = [1, 1, 0] # Eu sei que o animal é tipoQ mas não informo para aplicativo.
    animal_misterisoC = [0, 1, 1] # Eu sei que o animal é tipoQ mas não informo para aplicativo.
    ```  
    - Estimar com Algoritmos Estimadores do modelo sklearn
        - Código python:
        ```python
        test_x = [animal_misterisoA, animal_misterisoB, animal_misterisoC]
        test_y = [0, 1, 1] # Resultados Esperados # Labels reais
        # Gera Previsões
        previsoes = modelo_estimador.predict(test_x)
        # Sistema retorna previsoes como um NumpyArray = array([0, 1, 0]), nos informando que:
        # animal_misterisoA é do tipo P
        # animal_misterisoB é do tipo Q
        # animal_misterisoC é do tipo P
        ```  
    - Verificar acurácia da estimativa
        - Código python:
        ```python
        # Identificação de taxa de acerto sem biblioteca accuracy_score
        verificacao = (test_y == previsoes)
        # verificacao retorna array([True, True, False])
        # Sistema acertou na primeira e segunda estimativa. Mas errou na terceira.
        #Taxa de acerto
        corretos = verificacao.sum() # Número que quantidades de True
        taxa_de_acerto = corretos / len(verificacao)

        ## Identificação de taxa de acerto com biblioteca accuracy_score de sklearn.metrics
        from sklearn.metrics import accuracy_score
        taxa_de_acerto = accuracy_score(test_y, previsoes) * 100
        print("Taxa de acerto: %.2f" %(taxa_de_acerto))
        ```
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