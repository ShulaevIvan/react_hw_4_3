Менеджер фото
===

Вы решили модернизировать один из старых проектов и переписать его в виде React-компонентов:

![Менеджер фото](./src/components/PhotoManager/img/image.png)

## Интерфейс Менеджера фото

При клике на области «Click to select» должно появляться стандартное окно выбора файлов операционной системы, в котором пользователь может выбрать один или несколько файлов изображений (image/*).

После выбора файлов они автоматически загружаются и отображаются в виде preview фиксированного размера (нижний блок). Для отображения используйте DataURL. Новые файлы должны добавляться, а не заменять предыдущие.

При клике на крестик, изображение и все связанные с ним данные должны удаляться.

Важно: Drag & Drop реализовывать не нужно.

