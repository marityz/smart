# Инструкция по развертыванию проекта:

Склонировать репозиторий: git clone https://github.com/marityz/smart.git

После чего зайдем в папку /api-smart

## Инструкция для локального использования бэкенда: 

 Для запуска установите зависимости:

    npm install

 После чего можно запускать локальный сервер:

    npm run start

 Для разработки можно запустить сервер на localhost:3001 с хот релоудом:

    npm run dev
   
  
 
Инструкцию по установки Mongo на ПК здесь:
- [Официальная инструкция](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

Запустить базу можно командой:
- mongod



## Инструкция для локального использования фронтенда:

 Необходимо перейти в папку /front-smart

  Для запуска установите зависимости:
  
      npm install
  
  Для разработки можно запустить сервер на http://localhost:3000/ с хот релоудом:
  
      npm run start
  
  Для сборки проекта:
  
      npm run build
      
      
 # Описание функционала:
 
 ## - Бэкенд
 
 1. GET /item - возвращает весь список сохраненных товаров;
 
 2. GET /item?(сформированная строка для запроса с фильтром) 
  name и description принимаются в формате, например, ?name="запрос";
  дополнительный параметры в формате, например,  'params.Фирма': 'ФИРМА' 
  
  Пример заголовка запроса: 
  
  GET  
      "http://localhost:3001/api/item?name=NAME&description=DESCRIPTION&params.Фирма=ФИРМА&params.Страна производитель=СТРАНА&params.Цвет=ЦВЕТ"
 
 3. POST /item - создает товар с переданными в теле данными (обязательные поля/строки - name, description; 
  остальные передаются в объекте params. Количество ключей и значений свойств(в params) не ограничено в API);
  
  Пример POST запроса: 
  
  POST
       http://localhost:3001/api/item
  
  Тело запроса(JSON): 
  
  { "description" :"DESCRIPTION",
                           "name":"NAME",
                           "params": {
                                   "color":"COLOR",
                                   "фирма": "ФИРМА",
                                   }
                           }
                       
                       
 
 
 
 
 #### Технологии: express.js База данных Mongo DB
 
  ## - Фронтенд
  
  Проект состоит из двух страниц:
  
  Переключение страниц происходит в шапке сайта.
  
   - 1-я страница(страница поиска товара) url ('/home'): 
   
   Есть поля: 
   
   - название товара(основное);
   
   Дополнительные (открываются по нажатию на иконку "стрелочки вниз"): 
   
   - описание;
   - фирма;
   - cтрана производитель;
   - цвет;
   
   Поиск по параметрам производится по нажатию на кнопку "Искать";
   
   Поиск производится по одному любому параметру или по нескольким. Если не ввести ни один параметр,
   то выведутся все сохраненные до этого товары.
   
   
   - 2-я страница(Создание товара в базе) url ('/create'): 
    
    Форма содержит поля:
     - название товара(обязательно, минимум два символа);
     - описание (обязательное, минимум два символа);
     - фирма;
     - cтрана производитель;
     - цвет;
     
     
    По нажатию на кнопку "Добавить" происходит добавление товара в базу. 
   
   
  
  
  В дальнейшем планируется валидировать поля, добавить красивую отрисовку и обработку ошибок, удаление товаров из базы;
  
  
  
  #### Технологии: React.js

  
 
 
