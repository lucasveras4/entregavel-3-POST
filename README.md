# CRIANDO UMA REQUISIÇÃO POST COM EXPRESS NO NODE.JS

**Aqui vamos implementar uma requisição POST e testar usando o software INSOMNIA**

**Prévia do código**

 ![Captura de tela 2024-11-12 120424](https://github.com/user-attachments/assets/4e1d31bc-d7c5-4cde-bee8-64ceefe0a74d)
 ![Captura de tela 2024-11-12 120431](https://github.com/user-attachments/assets/d8601e7d-71a1-4d89-9e3c-142f38488f0b)


**Instalação:**
* Clone o repositório em uma pasta local na sua máquina utilizando o comando git clone

 ![Captura de tela 2024-11-12 131533](https://github.com/user-attachments/assets/f20756c7-aed0-4e90-bc67-4eb35db3d4bd)
 ![Captura de tela 2024-11-12 121841](https://github.com/user-attachments/assets/fff1d5ce-9a9a-45c3-9965-76e3b6d14d7e)
 ![Captura de tela 2024-11-12 121914](https://github.com/user-attachments/assets/3e8bae4d-1887-40da-936e-081f2408e908)

* Abra a pasta com os arquivos no seu editor de código de preferencial (utilizei o VScode)

* No editor de código com a pasta já aberta, abra um novo terminal e digite o comando: npm init

 ![Captura de tela 2024-11-12 122240](https://github.com/user-attachments/assets/2f11564c-7a8e-4df9-857a-175d5f84b7a7)
 ![Captura de tela 2024-11-12 122307](https://github.com/user-attachments/assets/101b3caf-0fbb-4930-8567-21e7bd09329c)

* Siga apertando ENTER ate chegar nessa confirmação, clique ENTER novamente para confirmar

* Dessa forma, instalaremos os pacotes JSON

 ![Captura de tela 2024-11-12 122731](https://github.com/user-attachments/assets/15f15c42-049d-4a79-91a0-4abf470b056e)

* Agora precisamos instalar o express para rodar o servidor na nossa rede local

* No terminal, digite o comando: npm install express

 ![Captura de tela 2024-11-12 122924](https://github.com/user-attachments/assets/8ca0d19b-ead1-4fae-95f5-f0d6d9a7024a)

* Agora so precisamos instalar a biblioteca body-parser, que irá nos ajudar na leitura dos dados que enviaremos via POST

 ![Captura de tela 2024-11-12 123328](https://github.com/user-attachments/assets/8b278925-6138-406d-ac91-d68365ca3707)


* Feito isso, digite o comando node app.js para rodar nosso servidor. Ele estará ativo na porta que foi previamente definida no código (:3000)

 ![Captura de tela 2024-11-12 123545](https://github.com/user-attachments/assets/eff9bee3-ef7e-4028-a203-059d2a421202)


**Execução:**
* Agora vamos para o INSOMNIA testar nosso codigo

 ![Captura de tela 2024-11-12 123830](https://github.com/user-attachments/assets/c67c74a4-f342-4db2-bc5c-f59958cd0488)

* Dentro do INSOMNIA, aperte Crtl + n para criar um novo request

* Copie e cole o link do servidor local "http://localhost:3000" e mude o tipo de requisição para POST, sem isso nossa requisição não irá funcionar

 ![Captura de tela 2024-11-12 124047](https://github.com/user-attachments/assets/96875bbd-2323-4df3-b282-2792dc649186)

* Apos isso, va na aba "body" e mude para o tipo "JSON"

 ![Captura de tela 2024-11-12 124133](https://github.com/user-attachments/assets/35dbdecf-d448-47b9-82ba-5e18139d53b3)

* Declare as variáveis da forma apresentada abaixo

 ![Captura de tela 2024-11-12 130928](https://github.com/user-attachments/assets/55096b2a-99ac-462c-a36b-dffd42f82865)

* Agora você direciona o servidor para um dos endpoints que declaramos no código, por exemplo o de **soma**

 ![Captura de tela 2024-11-12 131136](https://github.com/user-attachments/assets/b2a1b387-77d8-461d-9139-b446047e6df6)

* Adicione o endpoint no link de servidor no INSOMNIA e clique em "SEND" para enviar a requisição

 ![Captura de tela 2024-11-12 131225](https://github.com/user-attachments/assets/46c1d2a0-681a-4075-bf31-9db0f89ece34)

* Pronto :) , agora você mesmo pode testar os outros endpoints: /subtracao /multiplicacao /divisao
