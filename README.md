# Prototype-Design-Pattern

Visão geral

O Prototype é um padrão de projeto criacional que permite copiar objetos existentes sem fazer seu código ficar dependente de suas classes.
O padrão de design Protótipo é um dos padrões de design criacional, que envolve a criação de objetos com base em um modelo de um objeto existente por meio de clonagem. Em vez de criar uma nova instância de um objeto do zero e configurá-lo, o padrão de protótipo permite copiar um objeto existente e possivelmente personalizá-lo.

Problema

Digamos que você tenha um objeto, e quer criar uma cópia exata dele. Primeiro, você tem que criar um novo objeto da mesma classe. Então você terá que ir por todos os campos do objeto original e copiar seus valores para o novo objeto. 
	Porém, nem todos os objetos podem ser copiados dessa forma porque alguns campos de objeto podem ser privados e não visíveis fora do próprio objeto.

 ![Problema](https://refactoring.guru/images/patterns/content/prototype/prototype-comic-1-en.png?id=4cc45ae42e26cc9533a6ac540713d1fa)

Solução

O padrão Prototype delega o processo de clonagem para o próprio objeto que está sendo clonado. O padrão declara uma interface (ou classe abstrata) comum para todos os objetos que suportam clonagem. Essa interface permite que você clone um objeto sem acoplar seu código à classe daquele objeto. Geralmente, tal interface contém apenas um único método “clonar”.
O método cria um objeto da classe atual e carrega todos os valores de campo para o antigo objeto para o novo. Você pode até mesmo copiar campos privados porque a maioria das linguagens permite objetos acessar campos privados de outros objetos que pertencem a mesma classe.


