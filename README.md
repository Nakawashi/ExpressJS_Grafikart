# ExpressJS_Grafikart
Tuto pour comprendre le fonctionnement de NodeJS utilisant Semantic et ExpressJS ainsi que d'autres modules. Petite app permettant de POST des messages (commentaires), de les stocker dans une db mysql et de les afficher en-dessous du formulaire. Le [tutoriel](https://www.youtube.com/watch?v=Q8wacXNngXs&list=PLjwdMgw5TTLV7VsXd9NOeq39soYXORezN&index=8) date de 2016.

db : mysql

|   Column   |     Type     |  Comment  |  PK  |  Nullable  |  Default   |
|------------|--------------|-----------|-----|------------|------------|
|     id     |     int      |           | YES |     NO     |            |
|   content  | varchar(255) |           |     |    YES     |            |
| created_at |  datetime    |           |     |    YES     |            |

Oui je suis au courant que les données sont en clair et oui c'est en toute conscience :D
