
# Respiro Seguro

Aplicativo para facilitar a detecção precoce de sinais de risco de suicídio, permitindo intervenções cruciais. Além disso, visa proporcionar acesso a recursos de emergência ao estabelecer contato direto com profissionais especializados em saúde mental.

## Instalações

### 1 - Instalar o  Node.js

Recomendo a instalação nvm, um gerenciador de versão do Node.js.Com o NVM a gente pode ver as versões do Node, escolher quais queremos instalar ou desisntalar e definir qual queremos usar em cada momento ou projeto.

[Link para instalar o nvm](https://github.com/nvm-sh/nvm)

Comando para listar as vesões disponível para instalação:
```
nvm ls-remote  
```

Comando para instalar versão:
```
nvm install 20.14.0
```

### 2 - Instalar o Aplicativo Expo GO no seu dispositivo Android ou IOS:

[App Store](https://apps.apple.com/app/apple-store/id982107779)

[Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www&pli=1)

### 3 - Instalar o  Expo:

```
npm install --global expo-cli
```

## Executando o Projeto:
Concluído os passos anteriores, só falta instalara as dependencias e executar o projeto de fato. Para isso vamos abrir um terminal na pasta do projeto e executar os seguintes comando:

```
npm install
```
Depois disso, as dependencias serão instaladas e só vamos executar o código para executar o expo
```
npx expo start --tunnel
```

Após isso, o codigo irá gerar um link e um QR Code.
Basta abrir o Expo GO no seu dispositivo e ler o QR Code a partir dele, o projeto do app será simulado no seu dispositivo e atualizado automaticamente ao fazer mudanças no código, poupando processamento do seu computador e facilitando a vizualização e workflow do projeto.
