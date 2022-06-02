# Все траблы, которые я тут встретил
1. Не понятно, как будет себя вести изображение по этому выбрал object-fit: cover;
2. Проматался целый час с тем, чтобы сделать нормальное всплывающее меню. Так как при absolut`ном позиционировании блок начинает занимать такую же ширину, как и его родитель, то была проблема в том, что бы блок абсолютный занимал ширину по контенту. Все это обходится с помощью.
```
	word-wrap: nowrap;
```
3. Чтобы обратиться при активном классе к псевдоэлементу, надо писать следующее.
```css
	.header__burger._is-active:before {}
	or 
	.header__burger._is-active:after {}
```
4. Чтобы снять :hover у элемента, необходимо написать следующее свойство.
```
	pointer-events: none;
```